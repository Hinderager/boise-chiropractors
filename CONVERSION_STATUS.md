# Boise Chiropractors Site Conversion Status

## COMPLETED TASKS

### 1. Package Configuration
- ✅ Updated package.json name from "hvac-boise" to "boise-chiropractors"

### 2. Core Components  
- ✅ Header.tsx - Already had chiropractic services configured
  - Updated resources dropdown links (hvac-tips → health-tips, etc.)
- ✅ Footer.tsx - Already had chiropractic content
- ✅ HeroSection.tsx - Already had chiropractic messaging

### 3. Services Structure
- ✅ Deleted old HVAC service directories:
  - air-conditioning/
  - ductwork/
  - furnaces/
  - heating/
  - heat-pumps/
  - indoor-air-quality/

- ✅ Created new chiropractic service directories with complete pages:
  - adjustments/ (with page.tsx)
  - back-pain/ (with page.tsx)
  - neck-pain/ (with page.tsx)
  - sports-injuries/ (with page.tsx)
  - auto-accidents/ (with page.tsx)
  - wellness-care/ (with page.tsx)

- ✅ Updated main services page (src/app/services/page.tsx) with:
  - Chiropractic-focused metadata
  - Service categories matching new structure
  - Natural, conversational content

### 4. Resources Pages
- ✅ Renamed and updated resource directories:
  - hvac-tips/ → health-tips/ (with new content)
  - repair-vs-replace/ → payment-options/ (with insurance info)
  - financing/ → new-patient-info/ (with what to expect content)
  - maintenance-plans/ → deleted

### 5. Cities-Served Structure
- ✅ Deleted HVAC service subdirectories from ALL city folders:
  - Removed ac-repair, ac-installation, ac-maintenance
  - Removed furnace-repair, furnace-installation
  - Removed heat-pump-repair, heat-pump-installation
  - Removed hvac-maintenance
- ⚠️ Partially updated Boise city page (sed replacements applied)

## REMAINING TASKS

### 1. Cities-Served Pages (PRIORITY)
Each city needs its main page.tsx updated with chiropractic content:
- boise/page.tsx (partially done)
- meridian/page.tsx
- nampa/page.tsx
- caldwell/page.tsx
- eagle/page.tsx
- garden-city/page.tsx
- kuna/page.tsx
- star/page.tsx
- middleton/page.tsx
- cities-served/page.tsx (main index page)

**Template Structure for Each City:**
```typescript
- Change title: "Chiropractor in [City] Idaho"
- Change description: focus on chiropractic services
- Update canonical URL
- Replace neighborhoods (keep same)
- Update services array to point to /services/* paths
- Replace image src to chiropractic-themed images
- Update all HVAC references to chiropractic terminology
- Keep same general layout/structure
```

### 2. Blog Posts
Need to rename/rewrite these HVAC blog posts to chiropractic topics:
- choosing-hvac-contractor-boise/ → choosing-chiropractor-boise/
- hvac-pricing-explained/ → chiropractic-pricing-explained/
- repair-vs-replace-furnace/ → when-to-see-chiropractor/
- seasonal-hvac-maintenance/ → chiropractic-maintenance-care/
- signs-ac-needs-repair/ → signs-you-need-chiropractor/

### 3. About-Us Pages  
Check and update if needed:
- about-us/page.tsx
- about-us/testimonials/page.tsx
- about-us/licenses-insurance/page.tsx
- about-us/why-choose-us/page.tsx
- about-us/careers/page.tsx

### 4. Other Pages to Review
- contact/page.tsx
- resources/faq/page.tsx
- resources/page.tsx
- privacy/page.tsx
- terms/page.tsx

## NOTES

### What's Working
- Header navigation is fully chiropractic-focused
- Footer has correct chiropractic services
- Service structure is complete with good content
- Resources pages have appropriate chiropractic content
- Package.json is correctly named

### Key Patterns Used
- Conversational, natural tone (no corporate jargon)
- Focus on pain relief and wellness
- Emphasize same-day appointments
- Include insurance information
- Highlight local service in Treasure Valley
- Phone number: (208) 505-9352

### Image Placeholders
Most pages reference these images that may need to be created:
- /generated/hero-chiropractic.webp
- /generated/boise-chiropractic.webp
- /generated/[city]-chiropractic.webp

## QUICK FIX COMMANDS

To finish updating all city pages at once, you could use a script like this:

```bash
for city in meridian nampa caldwell eagle garden-city kuna star middleton; do
  sed -i 's/HVAC Services/Chiropractor/g; 
          s/hvac-boise.com/boise-chiropractors.com/g; 
          s/heating and cooling/chiropractic care/g; 
          s/Boise HVAC Pros/Boise Chiropractors/g' \
    "src/app/cities-served/$city/page.tsx"
done
```

However, for best results, each page should be manually reviewed to ensure:
1. Metadata is correct for SEO
2. Service links point to correct paths
3. Content reads naturally
4. Images are appropriate
5. No HVAC terminology remains
