# Vibgyor Surgical Website

A professional multi-page healthcare equipment website for Vibgyor Surgical.

## Website pages

- `index.html` — focused hero-only home page
- `about.html` — company introduction and values
- `products.html` — interactive product catalogue and detail modals
- `solutions.html` — hospitals, clinics, operation theatres and critical care
- `why-us.html` — service strengths and consultant information
- `contact.html` — contact details, enquiry form and embedded location map

## Included

- Refined sticky header and consistent premium footer across every page
- Exact supplied logo file at `assets/vibgyor-logo-original.png`
- Responsive desktop, tablet and mobile navigation
- AI-generated photorealistic hospital imagery
- Sixteen product types based on the supplied company reference
- Deep links from product enquiries to a pre-filled contact form
- Client-side form validation, loading state and WhatsApp handoff
- Call, WhatsApp, Google Maps and directions actions
- Embedded Google map for 113/4 Second Floor, Navyug Market, Ghaziabad
- Accessible semantic markup, page-specific SEO metadata and structured business data

## Preview locally

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173`.

## Production note

The enquiry form validates in the browser, stores the latest submission locally, displays the success state and creates a detailed WhatsApp handoff. Connect the submit handler in `script.js` to a backend, CRM or email service if submissions must also be stored remotely.
