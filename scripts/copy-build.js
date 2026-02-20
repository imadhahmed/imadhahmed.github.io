const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const targetDir = path.join(buildDir, 'portfolio');

if (!fs.existsSync(buildDir)) {
    console.error('Build directory not found!');
    process.exit(1);
}

// Create the target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
}

// Read all files in the build directory
const files = fs.readdirSync(buildDir);

files.forEach(file => {
    // Skip the target directory itself to avoid infinite recursion
    if (file === 'portfolio') return;

    const srcPath = path.join(buildDir, file);
    const destPath = path.join(targetDir, file);

    // Copy file or directory recursively
    if (fs.lstatSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath);
    } else {
        fs.copyFileSync(srcPath, destPath);
    }
});

console.log('Build files copied to build/portfolio successfully!');

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }

    const entries = fs.readdirSync(src);

    entries.forEach(entry => {
        const srcPath = path.join(src, entry);
        const destPath = path.join(dest, entry);

        if (fs.lstatSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
}
