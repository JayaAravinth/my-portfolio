# Portfolio Customization Guide

Your portfolio has been successfully created! Here's how to customize it for your job applications.

## Getting Started

### Run the Development Server

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Customizing Your Portfolio

### 1. Personal Information

Edit `/src/data/portfolioData.ts` to update:

- **Your name and title**: Update `personalInfo.name` and `personalInfo.title`
- **Your bio**: Update `personalInfo.bio`

### 2. Projects

Add or modify your projects in the `projects` array:

```typescript
{
  id: 1,
  title: 'Your Project Name',
  description: 'What does it do? What problem does it solve?',
  technologies: ['React', 'TypeScript', 'Node.js'],
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://yourproject.com', // Optional
}
```

### 3. Experience

Update your work experience in the `experience` array:

```typescript
{
  id: 1,
  company: 'Company Name',
  position: 'Your Position',
  duration: 'Jan 2023 - Present',
  description: 'What did you do? What were your achievements?',
  technologies: ['React', 'TypeScript', 'AWS'],
}
```

### 4. Skills

Update your skills in the `skills` array. Organize them by category:

```typescript
{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript'],
}
```

### 5. Contact Information

Update your contact details in the `contact` object:

```typescript
export const contact: Contact = {
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername', // Optional
};
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts  # Your portfolio data
│   ├── types/
│   │   └── index.ts      # TypeScript type definitions
│   ├── App.tsx           # Main app component
│   ├── App.css          # Main styles
│   └── index.css        # Global styles
```

## Customizing Styles

### Colors

The portfolio uses a purple/blue gradient theme. To change colors, edit these values in `App.css`:

- Primary gradient: `#667eea` to `#764ba2`
- Background: `#0d0d0d` and `#1a1a2e`

### Fonts

Change the font in `index.css` by updating the `font-family` property.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag and drop the `dist` folder to Netlify

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Tips for Job Applications

1. **Keep it updated**: Add new projects and skills regularly
2. **Quality over quantity**: Show 3-5 best projects instead of everything
3. **Use real data**: Replace all placeholder content with your actual information
4. **Add screenshots**: Consider adding project images to make it more visual
5. **Proofread**: Check for typos and grammatical errors
6. **Test on mobile**: Ensure it looks good on all devices
7. **Add analytics**: Consider adding Google Analytics to track visitors

## Next Steps

1. Replace all placeholder content in `/src/data/portfolioData.ts`
2. Test the portfolio locally with `npm run dev`
3. Build for production with `npm run build`
4. Deploy to your preferred hosting platform
5. Add the portfolio link to your resume and LinkedIn

Good luck with your job applications!
