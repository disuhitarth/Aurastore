# Backend Implementation TODO

This document outlines all backend features that need to be implemented for the Aura Renovations website.

## 🎯 Overview

The backend will provide a comprehensive admin dashboard for managing all aspects of the business, with Google Drive integration for document storage and collaboration.

## 🔐 1. Authentication System

### Tasks
- [ ] Set up NextAuth.js with credentials provider
- [ ] Create admin user model in MongoDB
- [ ] Implement secure password hashing with bcrypt
- [ ] Create login page at `/admin/login`
- [ ] Add session management
- [ ] Implement role-based access control (Admin, Manager, Employee)
- [ ] Add password reset functionality
- [ ] Create user management interface

### Files to Create
- `app/api/auth/[...nextauth]/route.ts`
- `app/admin/login/page.tsx`
- `lib/auth.ts`
- `models/User.ts`
- `middleware.ts` (for protected routes)

---

## 📊 2. Database Schema

### Collections Needed

#### Users
```typescript
{
  _id: ObjectId,
  email: string,
  password: string (hashed),
  name: string,
  role: 'admin' | 'manager' | 'employee',
  createdAt: Date,
  updatedAt: Date
}
```

#### Clients
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  phone: string,
  address: string,
  projects: ObjectId[], // references
  status: 'active' | 'inactive',
  notes: string,
  createdAt: Date,
  updatedAt: Date
}
```

#### Projects
```typescript
{
  _id: ObjectId,
  clientId: ObjectId,
  title: string,
  description: string,
  type: 'residential' | 'commercial',
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled',
  budget: number,
  actualCost: number,
  startDate: Date,
  endDate: Date,
  images: string[], // Google Drive links
  documents: string[], // Google Drive links
  createdAt: Date,
  updatedAt: Date
}
```

#### SubTrades
```typescript
{
  _id: ObjectId,
  name: string,
  company: string,
  trade: 'electrician' | 'plumber' | 'carpenter' | 'painter' | 'other',
  phone: string,
  email: string,
  hourlyRate: number,
  rating: number,
  notes: string,
  createdAt: Date,
  updatedAt: Date
}
```

#### Suppliers
```typescript
{
  _id: ObjectId,
  name: string,
  company: string,
  category: string,
  phone: string,
  email: string,
  website: string,
  products: string[],
  pricing: object,
  notes: string,
  createdAt: Date,
  updatedAt: Date
}
```

#### Estimates
```typescript
{
  _id: ObjectId,
  clientId: ObjectId,
  projectId: ObjectId,
  estimateNumber: string,
  items: [{
    description: string,
    quantity: number,
    unitPrice: number,
    total: number
  }],
  subtotal: number,
  tax: number,
  total: number,
  status: 'draft' | 'sent' | 'approved' | 'rejected',
  validUntil: Date,
  pdfUrl: string, // Google Drive link
  createdAt: Date,
  updatedAt: Date
}
```

#### Invoices
```typescript
{
  _id: ObjectId,
  clientId: ObjectId,
  projectId: ObjectId,
  invoiceNumber: string,
  items: [{
    description: string,
    quantity: number,
    unitPrice: number,
    total: number
  }],
  subtotal: number,
  tax: number,
  total: number,
  status: 'unpaid' | 'paid' | 'overdue' | 'cancelled',
  dueDate: Date,
  paidDate: Date,
  pdfUrl: string, // Google Drive link
  createdAt: Date,
  updatedAt: Date
}
```

#### Contacts (Networking)
```typescript
{
  _id: ObjectId,
  name: string,
  company: string,
  role: string,
  phone: string,
  email: string,
  linkedin: string,
  category: 'client' | 'supplier' | 'partner' | 'other',
  notes: string,
  lastContact: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### BlogPosts
```typescript
{
  _id: ObjectId,
  title: string,
  slug: string,
  excerpt: string,
  content: string,
  author: string,
  category: string,
  tags: string[],
  status: 'draft' | 'published',
  aiGenerated: boolean,
  publishedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### ContactInquiries
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  phone: string,
  service: string,
  message: string,
  status: 'new' | 'contacted' | 'converted' | 'closed',
  assignedTo: ObjectId, // user reference
  notes: string,
  createdAt: Date,
  updatedAt: Date
}
```

### Files to Create
- `lib/mongodb.ts` - Database connection
- `models/*.ts` - Mongoose models for each collection

---

## 🎛️ 3. Admin Dashboard Pages

### 3.1 Website Control Board
**Route:** `/admin/dashboard`

**Features:**
- [ ] View website analytics (page views, visitors)
- [ ] Manage homepage content (hero text, stats, etc.)
- [ ] Update company information
- [ ] Manage partner logos
- [ ] View and respond to contact form submissions
- [ ] SEO settings

**API Routes:**
- `/api/admin/analytics`
- `/api/admin/content`
- `/api/admin/inquiries`

---

### 3.2 Media Channels Control Board
**Route:** `/admin/media`

**Features:**
- [ ] Manage social media links
- [ ] View social media analytics (if connected)
- [ ] Upload and manage project photos
- [ ] Organize gallery categories
- [ ] Manage blog post images
- [ ] Video content management (YouTube integration)

**API Routes:**
- `/api/admin/media/social`
- `/api/admin/media/gallery`
- `/api/admin/media/uploads`

---

### 3.3 Sub Trades Info and Pricing Board
**Route:** `/admin/subtrades`

**Features:**
- [ ] Add/Edit/Delete subcontractor information
- [ ] Track subcontractor ratings and performance
- [ ] Store pricing information by trade
- [ ] Track availability
- [ ] View project history per subcontractor
- [ ] Export subcontractor reports
- [ ] Google Drive integration for contracts

**API Routes:**
- `/api/admin/subtrades`
- `/api/admin/subtrades/[id]`
- `/api/admin/subtrades/search`

---

### 3.4 Client Data Board
**Route:** `/admin/clients`

**Features:**
- [ ] Add/Edit/Delete client information
- [ ] View all projects per client
- [ ] Track client communication history
- [ ] Store client documents (Google Drive)
- [ ] Client status management
- [ ] Export client lists
- [ ] Client search and filtering

**API Routes:**
- `/api/admin/clients`
- `/api/admin/clients/[id]`
- `/api/admin/clients/projects`

---

### 3.5 Goods & Suppliers Board
**Route:** `/admin/suppliers`

**Features:**
- [ ] Add/Edit/Delete supplier information
- [ ] Manage product catalogs
- [ ] Track pricing from different suppliers
- [ ] Store supplier contracts (Google Drive)
- [ ] Supplier rating and reviews
- [ ] Purchase history
- [ ] Price comparison tools
- [ ] Supplier search and filtering

**API Routes:**
- `/api/admin/suppliers`
- `/api/admin/suppliers/[id]`
- `/api/admin/suppliers/products`

---

### 3.6 Estimate Generator Board
**Route:** `/admin/estimates`

**Features:**
- [ ] Create new estimates with line items
- [ ] Use templates for common projects
- [ ] Calculate materials and labor automatically
- [ ] Generate PDF estimates
- [ ] Send estimates via email
- [ ] Track estimate status (sent, approved, rejected)
- [ ] Convert approved estimates to projects
- [ ] Save estimates to Google Drive
- [ ] Estimate search and filtering

**API Routes:**
- `/api/admin/estimates`
- `/api/admin/estimates/[id]`
- `/api/admin/estimates/generate-pdf`
- `/api/admin/estimates/send-email`

**Libraries Needed:**
- `jspdf` for PDF generation
- `nodemailer` for email sending

---

### 3.7 Invoice Generator Board
**Route:** `/admin/invoices`

**Features:**
- [ ] Create invoices from projects or manually
- [ ] Use templates for invoices
- [ ] Automatic tax calculations
- [ ] Generate PDF invoices
- [ ] Send invoices via email
- [ ] Track payment status
- [ ] Send payment reminders
- [ ] Record partial payments
- [ ] Save invoices to Google Drive
- [ ] Invoice reports and analytics
- [ ] Invoice search and filtering

**API Routes:**
- `/api/admin/invoices`
- `/api/admin/invoices/[id]`
- `/api/admin/invoices/generate-pdf`
- `/api/admin/invoices/send-email`

---

### 3.8 Emails Control
**Route:** `/admin/emails`

**Features:**
- [ ] View all email communications
- [ ] Send emails to clients, subcontractors, suppliers
- [ ] Email templates management
- [ ] Automated email responses
- [ ] Email tracking (opened, clicked)
- [ ] Schedule email sending
- [ ] Email attachments (link to Google Drive)
- [ ] Bulk email sending
- [ ] Email search and filtering

**API Routes:**
- `/api/admin/emails`
- `/api/admin/emails/send`
- `/api/admin/emails/templates`
- `/api/admin/emails/schedule`

**Configuration:**
- SMTP settings for `info@aurarenovations.ca`
- Email templates for: quotes, invoices, project updates, newsletters

---

### 3.9 Networking Board
**Route:** `/admin/networking`

**Features:**
- [ ] Manage business contacts
- [ ] Track relationships and interactions
- [ ] Set reminders for follow-ups
- [ ] Store meeting notes
- [ ] Link contacts to projects
- [ ] Export contact lists
- [ ] Integration with LinkedIn
- [ ] Contact search and filtering
- [ ] Relationship strength indicators

**API Routes:**
- `/api/admin/contacts`
- `/api/admin/contacts/[id]`
- `/api/admin/contacts/reminders`

---

## 🔌 4. Google Drive Integration

### Setup Tasks
- [ ] Create Google Cloud Project
- [ ] Enable Google Drive API
- [ ] Set up OAuth 2.0 credentials
- [ ] Implement Google authentication flow
- [ ] Create service account for server-side operations

### Features to Implement
- [ ] Upload files to Google Drive from admin dashboard
- [ ] Organize files in folders by project
- [ ] Share files with clients
- [ ] Sync invoices and estimates to Drive
- [ ] Store contracts and legal documents
- [ ] Backup database to Google Drive (scheduled)

### Files to Create
- `lib/googleDrive.ts` - Google Drive helper functions
- `app/api/drive/upload/route.ts`
- `app/api/drive/share/route.ts`

### Required npm Packages
- `googleapis`

---

## 📧 5. Email Integration

### Setup Tasks
- [ ] Configure SMTP for `info@aurarenovations.ca`
- [ ] Create email templates
- [ ] Set up email sending service (Nodemailer or SendGrid)

### Email Templates Needed
1. Contact form auto-response
2. Quote/Estimate email
3. Invoice email
4. Project update notification
5. Payment reminder
6. Thank you email
7. Newsletter template

### Files to Create
- `lib/email.ts` - Email helper functions
- `templates/emails/*.tsx` - Email templates
- `app/api/emails/send/route.ts`

---

## 🤖 6. AI-Powered Blog Generation

### Tasks
- [ ] Integrate OpenAI API or similar
- [ ] Create blog generation interface
- [ ] Set up content moderation
- [ ] Implement SEO optimization for blog posts
- [ ] Schedule automated blog posting
- [ ] Generate meta descriptions and titles
- [ ] Create blog categories and tags

### Files to Create
- `lib/ai.ts` - AI helper functions
- `app/api/blog/generate/route.ts`
- `app/admin/blog/page.tsx`

---

## 📱 7. Contact Form Integration

### Tasks
- [ ] Connect contact form to database
- [ ] Send email notifications on form submission
- [ ] Add spam protection (reCAPTCHA)
- [ ] Create admin interface to view submissions
- [ ] Mark inquiries as contacted/converted
- [ ] Assign inquiries to team members

### Files to Create
- `app/api/contact/route.ts`
- `app/admin/inquiries/page.tsx`

---

## 📊 8. Analytics & Reporting

### Dashboard Analytics
- [ ] Total projects completed
- [ ] Revenue tracking
- [ ] Active projects
- [ ] Pending estimates
- [ ] Outstanding invoices
- [ ] Client acquisition rate
- [ ] Project completion rate

### Reports to Generate
- [ ] Monthly revenue report
- [ ] Project profitability report
- [ ] Client report
- [ ] Subcontractor performance report
- [ ] Supplier pricing report

### Files to Create
- `app/admin/analytics/page.tsx`
- `app/api/reports/*.ts`

---

## 🔒 9. Security Considerations

### Implementation Checklist
- [ ] Input validation on all forms
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] CSRF tokens for forms
- [ ] Rate limiting on API routes
- [ ] Secure file uploads
- [ ] Environment variable protection
- [ ] Regular security audits
- [ ] Encrypted database backups

---

## 📦 10. Additional npm Packages Needed

```json
{
  "dependencies": {
    "mongoose": "^8.0.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0",
    "nodemailer": "^6.9.0",
    "googleapis": "^131.0.0",
    "jspdf": "^2.5.1",
    "jspdf-autotable": "^3.8.0",
    "react-chartjs-2": "^5.2.0",
    "chart.js": "^4.4.0",
    "date-fns": "^3.3.0",
    "zod": "^3.22.0",
    "react-hook-form": "^7.50.0",
    "@hookform/resolvers": "^3.3.0",
    "react-dropzone": "^14.2.0",
    "sharp": "^0.33.0"
  }
}
```

---

## 🚀 Implementation Priority

### Phase 1: Essential Backend (Week 1-2)
1. ✅ Authentication system
2. ✅ Database setup with basic models
3. ✅ Client Data Board
4. ✅ Contact form integration
5. ✅ Email system setup

### Phase 2: Business Operations (Week 3-4)
1. ✅ Estimate Generator
2. ✅ Invoice Generator
3. ✅ Sub Trades Board
4. ✅ Suppliers Board
5. ✅ Google Drive integration

### Phase 3: Advanced Features (Week 5-6)
1. ✅ Media Control Board
2. ✅ Networking Board
3. ✅ Emails Control
4. ✅ Website Control Board
5. ✅ AI Blog Generation

### Phase 4: Analytics & Optimization (Week 7-8)
1. ✅ Dashboard analytics
2. ✅ Reporting system
3. ✅ Performance optimization
4. ✅ Security hardening
5. ✅ Testing and bug fixes

---

## 📝 Notes

- All admin pages should be protected by authentication middleware
- Use Server Components where possible for better performance
- Implement proper error handling and logging
- Add loading states for better UX
- Make admin interface mobile-responsive
- Set up automated backups
- Create comprehensive API documentation
- Write unit tests for critical functions

---

**Last Updated:** 2025-01-14
**Status:** Planning Phase
**Estimated Completion:** 8 weeks
