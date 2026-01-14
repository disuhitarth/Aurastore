# Aura Renovations Inc. - Website

Modern, professional website for Aura Renovations Inc., a leading commercial and residential construction company in Brampton, ON.

## 🏗️ About Aura Renovations

**Aura Renovations Inc.** (also trading as **Aura Renos** & **House of Aura**) provides comprehensive construction services including:

- General Contracting
- Commercial Renovations
- Residential Renovations
- Project Management
- Property Management
- Design & Build Services

**Contact Information:**
- 📍 30 Intermodal Drive, #46, Brampton, ON
- 📞 647-391-3292
- ✉️ info@aurarenovations.ca
- ✉️ aurarenovations.inc@gmail.com

## 🌐 Domains

This website is configured for multiple domains:

- **aurarenovations.ca** (Primary)
- **aurarenos.ca**
- **aurarenos.com**
- **aurarenovations.com** (not yet accessible)

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Authentication:** NextAuth.js (for admin backend)
- **Database:** MongoDB (for backend features)
- **Email:** Nodemailer
- **Google Integration:** Google Drive API, Google Auth

## 🎨 Design System

**Color Scheme:**
- White (#FFFFFF)
- Black (#000000)
- Metallic Gold (#D4AF37)
- Grey (#9CA3AF)

**Fonts:**
- Headings: Montserrat
- Body: Inter

## 📁 Project Structure

```
Aurastore/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── blog/              # Blog page with AI-generated content
│   ├── contact/           # Contact page with inquiry form
│   ├── gallery/           # Project gallery (categorized)
│   ├── services/          # Services pages
│   │   ├── general-contracting/
│   │   ├── commercial/
│   │   ├── residential/
│   │   ├── project-management/
│   │   ├── property-management/
│   │   └── design-build/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home/Landing page
├── components/            # Reusable components
│   ├── home/             # Landing page components
│   └── layout/           # Header and Footer
├── public/               # Static assets
├── .env.example          # Environment variables template
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Aurastore
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your credentials:
   - MongoDB connection string
   - NextAuth secret
   - Google Drive API credentials
   - SMTP email settings

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌟 Features

### Frontend (Completed)

- ✅ **Landing Page** with hero, services preview, reviews, contact section, and map
- ✅ **Services Pages** with detailed information for all 6 service categories
- ✅ **Project Gallery** with categorized residential and commercial projects
- ✅ **About Us Page** with company story, vision, and values
- ✅ **Contact Page** with inquiry form, social media links, and location map
- ✅ **Blog** with sample posts (ready for AI-generated content)
- ✅ **Responsive Design** optimized for all devices
- ✅ **Professional UI** with smooth animations and transitions

### Backend (To Be Implemented - See BACKEND_TODO.md)

The following admin features are planned for future implementation:

- 🔲 Admin Authentication System
- 🔲 9 Admin Dashboard Control Boards:
  1. Website Control Board
  2. Media Channels Control Board
  3. Sub Trades Info and Pricing Board
  4. Client Data Board
  5. Goods & Suppliers Board
  6. Estimate Generator Board
  7. Invoice Generator Board
  8. Emails Control
  9. Networking Board
- 🔲 Google Drive Integration
- 🔲 Database Schema and API Routes
- 🔲 AI-Powered Blog Generation
- 🔲 Contact Form Email Integration

## 📝 Domain Setup Instructions

### DNS Configuration

For each domain (aurarenovations.ca, aurarenos.ca, aurarenos.com), configure the following DNS records:

**Option 1: Using Vercel (Recommended)**

1. Deploy to Vercel
2. In Vercel dashboard, go to Project Settings → Domains
3. Add each domain
4. Copy the DNS records provided by Vercel
5. Add these records in your domain registrar:
   - Type: `A` Record, Value: Vercel IP address
   - Type: `CNAME` Record, Name: `www`, Value: `cname.vercel-dns.com`

**Option 2: Using Custom Server**

1. Point A record to your server IP
2. Configure nginx or Apache to handle multiple domains
3. Set up SSL certificates for all domains

### Multi-Domain Handling

The Next.js configuration (`next.config.js`) includes rewrites for handling multiple domains. All domains will serve the same content.

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Compatible with any Node.js hosting platform:
- Netlify
- AWS Amplify
- Digital Ocean
- Heroku

## 🔐 Admin Access (Backend - To Be Implemented)

Once the backend is implemented, admin users will access the control panel at:
- `/admin` - Main dashboard
- `/admin/login` - Admin login

## 📧 Support

For technical support or questions:
- Email: info@aurarenovations.ca
- Phone: 647-391-3292

## 📄 License

© 2025 Aura Renovations Inc. All Rights Reserved.

---

**Built with ❤️ for Aura Renovations Inc.**
