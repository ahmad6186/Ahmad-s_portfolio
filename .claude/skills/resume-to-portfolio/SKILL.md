---
name: resume-to-portfolio
description: Use this skill whenever the user provides a resume/CV (PDF or otherwise) and asks to personalize, update, or "fill in" this portfolio site with their real info — name, bio, skills, work experience, projects, contact/social links, or resume download. Also use it when they later hand over a *new* CV version, logo/screenshot assets for a project card, or ask to "match the skills" or "sync the portfolio with my resume" — this is a recurring workflow, not a one-shot task. Trigger on phrases like "update my portfolio with my CV", "use my resume", "add my real experience", "here's my updated resume", or when an image is clearly a project/company logo meant for the Work section.
---

# Resume → Portfolio personalization

This project is a template-based portfolio (Vite + React + TS, see `src/components/`) that ships with placeholder content (fake name, Lorem ipsum, generic links). This skill captures the workflow for replacing that placeholder content with a real person's CV data, and for keeping it in sync as new CV versions or assets arrive.

## Why this needs a workflow, not just find-and-replace

The template's content model rarely maps 1:1 onto a real CV:
- The template may have more (or fewer) "slots" than the CV has entries — e.g. 3 career-timeline slots but the CV lists 2 jobs, or 6 project cards but the CV lists 0 personal side-projects (only work-experience projects).
- The same field is often **duplicated across multiple components** with no central data file — email/social links, name, and logo text each appear in 2+ places (e.g. `Navbar.tsx` + `Contact.tsx` for email; `Contact.tsx` + `SocialIcons.tsx` for social URLs). Missing one leaves stale placeholder data live on the site.
- Some template sections describe skills/themes the person doesn't have (e.g. a "Design" card full of Blender/3D-animation tags for a backend developer). These need re-purposing, not just text substitution.
- Visual assets (tech-stack logos, project images) are constrained by what image files actually exist in the repo — you can't show a skill's icon if no logo asset for it exists yet.

Treat every personalization pass as: **read the CV → find every placeholder location → resolve mismatches with the user → edit → verify nothing placeholder is left → sync version control.**

## Step 1: Read the CV completely

Read the whole PDF (not just skim) before touching code. Extract: name, contact (email/phone/LinkedIn/GitHub), education, each job with company/dates/team size/bullets, skills grouped by category, and any certifications. Note the CV's *tone* (e.g. "Contributed to..." vs "Built...") — later prose should match it, not sound generic.

If the user sends a revised CV later, diff it mentally against what's already on the site (same job? just reworded bullets? new skill added?) so you only touch what actually changed.

## Step 2: Inventory every placeholder location before editing

Don't edit component-by-component from memory — grep first, since content is scattered and duplicated:

```bash
grep -rn "Lorem ipsum\|lorem ipsum" src/
grep -rln "example@mail.com\|example.com\|mailto:example" src/
grep -rn "github.com\"\|linkedin.com\"\|x.com\"\|instagram.com\"" src/  # bare/placeholder social URLs
grep -rn "Position In Company\|Company Name\|Project Name\|20XX" src/  # generic template labels
grep -n "<title>" index.html
```

Cross-reference against the earlier personalization pass (if any) to know which components were already touched — e.g. in this project: `Landing.tsx`, `Loading.tsx`, `Navbar.tsx` (name/logo, duplicated), `About.tsx` (bio), `WhatIDo.tsx` (skill cards), `Career.tsx` (timeline), `Work.tsx` (project cards), `Contact.tsx` + `SocialIcons.tsx` (email/phone/social, duplicated), `TechStack.tsx` (3D skill-icon textures, image-asset-constrained), `package.json` / `index.html` (branding metadata).

## Step 3: Ask before inventing content

Never fabricate specifics the CV doesn't contain — dates, project names, or metrics that aren't in the CV. When the template has more/fewer slots than the CV has real content, or lists platforms (Twitter, Instagram) the CV doesn't mention, ask the user how to resolve it rather than guessing. Use a small batch of concrete either/or questions, e.g.:
- "The template has 6 project cards but your CV lists 0 personal projects — shrink to real work-experience projects, or leave placeholders for you to fill in later?"
- "Your CV has no GitHub/Twitter — drop those icons, or keep them as placeholders?"

Resolve all of these up front in one round rather than trickling questions in mid-edit.

## Step 4: Edit, keeping duplicated fields in sync

For any field that exists in more than one file (name, email, phone, social URLs, logo initials), update **every** occurrence in the same pass — grep again after editing to confirm none were missed. When rewriting bios/descriptions, condense CV bullets into prose matching the CV's tone; don't just copy bullet-point fragments verbatim into a paragraph.

When a template section's *theme* doesn't fit the person (e.g. a Design/3D card for someone with no design skills), re-purpose the section around their actual skill categories rather than leaving mismatched content or deleting the section.

## Step 5: Handle visual assets (logos, project images)

When the user provides a logo/screenshot image for a project card:
1. Copy it into `public/images/` with a descriptive filename.
2. Wire it into the relevant component's data (e.g. `Work.tsx`'s `projects` array `image` field), not by hardcoding a new one-off `<img>`.
3. **Check whether it needs padding before use as a texture/sphere/tile.** A logo that fills its canvas edge-to-edge will look oversized next to other assets that have generous whitespace margin. Compare against a sibling asset already in use:
   ```bash
   python3 -c "from PIL import Image; im=Image.open('public/images/existing-asset.webp'); print(im.size)"
   ```
   If the new logo is tightly cropped, trim it to content bounding box and re-paste it centered on a white (or matching-background) canvas at the same proportions as the sibling asset, rather than just resizing the file dimensions — resizing alone doesn't change how much of the render surface (e.g. a 3D sphere's UV space) the logo visually occupies.

When wiring skill icons into a limited visual (like a 3D tech-stack scene), only include skills that have an actual logo asset available — say so explicitly rather than silently omitting them, and offer to add the missing ones once the user supplies logos.

## Step 6: Verify nothing placeholder survives, and that it builds

```bash
grep -rn "Lorem ipsum\|Moncy\|example@mail.com\|Project Name\|Position In Company" src/ index.html || echo "clean"
npm run lint   # check for new errors introduced by your edits specifically — pre-existing unrelated lint debt is out of scope
npx tsc -b     # confirms no type errors from your changes
npm run build  # full production build must succeed before calling it done
```

Only fix lint/type errors on lines you touched — don't scope-creep into unrelated pre-existing issues unless asked.

## Step 7: Version control hygiene before pushing

Before committing, always check `git status` for anything unexpected staged (e.g. `node_modules/` getting accidentally tracked if `.gitignore` is missing or incomplete) — never commit dependency directories or build caches. Stage only the intentional content/asset changes, write a commit message describing *what changed* (not the mechanical diff), and push. If `git push` fails with a credential/auth error in a sandboxed environment, tell the user the commit is ready locally and give them the exact `git push` command to run themselves — don't attempt to supply credentials.

## Recap checklist

- [ ] Read full CV, noted tone and exact facts (no invention)
- [ ] Grepped for every placeholder pattern before editing
- [ ] Asked the user to resolve template-vs-CV mismatches (extra/missing slots, unlisted platforms)
- [ ] Updated every duplicated occurrence of shared fields (name, email, socials, logo text)
- [ ] Re-purposed (not just re-texted) sections whose theme didn't fit
- [ ] Copied and wired any new image assets; padded logos that were too tightly cropped
- [ ] Confirmed only CV-backed skills appear in asset-constrained visuals (or flagged the gap)
- [ ] Re-grepped to confirm zero placeholder strings remain
- [ ] Lint/typecheck/build all pass for the touched files
- [ ] `git status` checked before commit (no `node_modules`/build artifacts); pushed or handed off the exact push command
