/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const https = require('https');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// randomuser.me serves actual photos of real people - reliable JPEG images
// Using different seed numbers to ensure distinct faces
const imagesToDownload = [
  // Team leaders - real person portraits
  ['leader_1.jpg', 'https://randomuser.me/api/portraits/men/52.jpg'],   // CEO
  ['leader_2.jpg', 'https://randomuser.me/api/portraits/women/43.jpg'], // Director (different from before)
  ['leader_3.jpg', 'https://randomuser.me/api/portraits/men/76.jpg'],   // Operations

  // Students - all distinct
  ['student_1.jpg', 'https://randomuser.me/api/portraits/men/44.jpg'],  // Bilal Ahmad
  ['student_2.jpg', 'https://randomuser.me/api/portraits/women/55.jpg'], // Ayesha Khan
  ['student_3.jpg', 'https://randomuser.me/api/portraits/men/91.jpg'],  // Zubair Qureshi (DIFFERENT from student_1)
  ['student_4.jpg', 'https://randomuser.me/api/portraits/women/66.jpg'], // Mariam Jameel

  // Career coaching - office/person scene from picsum
  ['service_career.jpg', 'https://picsum.photos/seed/office789/800/600'],
];

const downloadOne = (filename, url) => {
  return new Promise((resolve, reject) => {
    const dest = path.join(publicDir, filename);
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close(() => fs.unlink(dest, () => {}));
        return downloadOne(filename, res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close(() => fs.unlink(dest, () => {}));
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const size = fs.statSync(dest).size;
          if (size < 1000) {
            fs.unlinkSync(dest);
            return reject(new Error(`Too small (${size} bytes): ${filename}`));
          }
          console.log(`✓ ${filename} (${size} bytes)`);
          resolve();
        });
      });
    }).on('error', err => {
      file.close(() => fs.unlink(dest, () => {}));
      reject(err);
    });
  });
};

async function run() {
  for (const [name, url] of imagesToDownload) {
    try {
      await downloadOne(name, url);
    } catch (e) {
      console.error(`✗ ${name}: ${e.message}`);
    }
  }
  console.log('\nDone!');
}

run();
