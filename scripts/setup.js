#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

console.log('🦁 Setting up Kisima Safaris Website...\n')

// Check if we're in the right directory
const packageJsonPath = path.join(process.cwd(), 'package.json')
if (!fs.existsSync(packageJsonPath)) {
    console.error('❌ package.json not found. Please run this script from the project root.')
    process.exit(1)
}

// Create necessary directories
const directories = [
    'public/images',
    'public/images/destinations',
    'public/images/services',
    'public/images/gallery',
    'public/images/team',
    'components/ui',
    'lib',
    'types',
    'app/api',
    'app/destinations/[slug]',
    'app/services/[slug]',
    'scripts'
]

console.log('📁 Creating directory structure...')
directories.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir)
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
        console.log(`   ✅ Created ${dir}`)
    } else {
        console.log(`   ⏭️  ${dir} already exists`)
    }
})

// Create .env.local from .env.example if it doesn't exist
const envExamplePath = path.join(process.cwd(), '.env.example')
const envLocalPath = path.join(process.cwd(), '.env.local')

if (fs.existsSync(envExamplePath) && !fs.existsSync(envLocalPath)) {
    console.log('\n🔧 Setting up environment variables...')
    fs.copyFileSync(envExamplePath, envLocalPath)
    console.log('   ✅ Created .env.local from .env.example')
    console.log('   📝 Please update .env.local with your actual values')
} else if (fs.existsSync(envLocalPath)) {
    console.log('\n⏭️  .env.local already exists')
} else {
    console.log('\n⚠️  .env.example not found, skipping environment setup')
}

// Create basic favicon and manifest files
console.log('\n🎨 Setting up basic assets...')

// Create a simple robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: https://kisimasafaris.com/sitemap.xml
`

fs.writeFileSync(path.join(process.cwd(), 'public/robots.txt'), robotsContent)
console.log('   ✅ Created public/robots.txt')

// Create a basic site.webmanifest
const manifest = {
    name: "Kisima Safaris",
    short_name: "Kisima",
    description: "Discover the Magic of Africa with Kenya's Premier Safari Company",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d97706",
    icons: [
        {
            src: "/favicon-192.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "/favicon-512.png",
            sizes: "512x512",
            type: "image/png"
        }
    ]
}

fs.writeFileSync(
    path.join(process.cwd(), 'public/site.webmanifest'),
    JSON.stringify(manifest, null, 2)
)
console.log('   ✅ Created public/site.webmanifest')

// Install dependencies if needed
console.log('\n📦 Checking dependencies...')
try {
    execSync('npm list lucide-react', { stdio: 'ignore' })
    console.log('   ✅ Dependencies are installed')
} catch (error) {
    console.log('   📥 Installing dependencies...')
    execSync('npm install', { stdio: 'inherit' })
    console.log('   ✅ Dependencies installed')
}

// Check if TypeScript is working
console.log('\n🔍 Checking TypeScript setup...')
try {
    execSync('npx tsc --noEmit', { stdio: 'ignore' })
    console.log('   ✅ TypeScript configuration is valid')
} catch (error) {
    console.log('   ⚠️  TypeScript errors found, please check your code')
}

// Create a simple .gitignore if it doesn't exist
const gitignorePath = path.join(process.cwd(), '.gitignore')
if (!fs.existsSync(gitignorePath)) {
    const gitignoreContent = `# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next
out

# nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
public

# Storybook build outputs
.out
.storybook-out

# Temporary folders
tmp/
temp/
`

    fs.writeFileSync(gitignorePath, gitignoreContent)
    console.log('   ✅ Created .gitignore')
}

// Create sample images directory structure info
const imageStructure = `
📁 public/images/ - Image Organization Guide

Recommended structure:
├── hero/
│   ├── hero-safari.jpg (1920x1080)
│   ├── hero-mountain.jpg (1920x1080)
│   └── hero-beach.jpg (1920x1080)
├── destinations/
│   ├── maasai-mara/ (800x600 recommended)
│   ├── mount-kenya/
│   ├── kilimanjaro/
│   └── coastal-beaches/
├── services/
│   ├── wildlife-safari.jpg
│   ├── mountain-climbing.jpg
│   └── honeymoon-package.jpg
├── gallery/
│   └── [destination-name]/
├── team/
│   └── [member-name].jpg (400x400 recommended)
└── icons/
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png (180x180)
    ├── favicon-192.png
    └── favicon-512.png

Image Guidelines:
- Use WebP format when possible
- Optimize images before uploading
- Include alt text for accessibility
- Recommended max size: 2MB per image
- Use descriptive filenames
`

fs.writeFileSync(path.join(process.cwd(), 'public/images/README.md'), imageStructure)
console.log('   ✅ Created image organization guide')

// Success message
console.log('\n🎉 Setup complete! Here\'s what you need to do next:\n')
console.log('1. 📝 Update .env.local with your actual values')
console.log('2. 🖼️  Add your safari images to public/images/')
console.log('3. ✏️  Update content in lib/data.ts with your information')
console.log('4. 🧪 Run the development server: npm run dev')
console.log('5. 🚀 Deploy to your hosting platform')
console.log('\n📞 Need help? Contact: info@kisimasafaris.com')
console.log('🌍 Visit: https://kisimasafaris.com')
console.log('\n🦁 Happy safari coding! 🦁')