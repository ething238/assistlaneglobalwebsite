# AssistLane Global — Virtual Assistant Services

The AssistLane Global website contains 33 HTML pages, its editable source modules, and local images, styles and interactions. The original layout was planned in the [design brief](https://docs.google.com/document/d/1O_Xmsa4ciOLrGJ3HWBRaBNjjSo4UxsiO144bAN-QaFU/edit?usp=sharing).

Serve `dist/` over local HTTP to preview the site, for example with `python -m http.server 4357 --bind 127.0.0.1 --directory dist`, then open `http://127.0.0.1:4357/`. The site has no runtime dependencies. To change page layouts, edit `build.mjs`; for service content and FAQs, edit `content.mjs`. Run `node build.mjs` to regenerate the HTML. The shared styles and interactions are in `dist/site.css` and `dist/site.js`.

The homepage introduces general virtual assistant support and has one dedicated bookkeeping section. Bookkeeping is listed under Services in the header rather than as a separate navigation item. All 33 pages use the simpler reading layout. `editorial-pages.mjs` groups detailed examples and planning topics into expandable sections while retaining service-specific information. The build enforces at least 1,500 editorial words per page, excluding the header, footer, shared contact banner, forms and navigation. The complete page must also remain within 2,000 words. `dist/word-counts.json` records both counts for every page. The build stops before replacing pages if either requirement fails.

The homepage introduces services, bookkeeping, getting started and the team, with practical guidance and FAQs below. Shared navigation uses a short Services menu, the footer links to overview pages, and the primary contact action is labelled “Get in touch”. All 33 page URLs remain available through the service and industry directories. Phone numbers are optional in the enquiry form; entered numbers are still validated. The word count includes complete FAQ answers and expandable guidance.

`editorial-keywords.mjs` contains reviewed wording for the existing primary keywords. Coverage is **exact phrase mentions × phrase word count ÷ editorial word count × 100**. The build enforces exactly 2% on the 29 pages with configured primary keywords. The two development pages, Privacy Policy and 404 page have no primary keyword configured and are marked not applicable. `dist/keyword-density.json` records the phrase, mentions, coverage and raw phrase frequency for every page. `legacy-anchors.mjs` preserves original fragment targets as well as the existing page paths and canonical URLs.

Edit `playbooks.mjs` for the original service scope tables, `catalogue-details.mjs` for expanded service and industry sections, and `specialist-services.mjs` or `specialist-industries.mjs` for the new playbooks. Their worked examples and handoffs are in `specialist-guides.mjs`. See `SERVICE-CATALOGUE.md` for the page map and `COMPETITOR-REVIEW.md` for the sources behind the guides.

The static build uses local WebP photos, with smaller sources for narrower layouts. Below the fold, images load on demand and cards animate once as they come into view. The cover diagrams stay still, and the animation respects the visitor’s reduced motion setting.

Before a public launch, confirm service scopes, specialist availability and delivery arrangements, add any approved team material and proof, confirm pricing and coverage, and add reviewed terms. The enquiry form validates entries in the browser. When connecting an enquiry route, review the Privacy Policy in `build.mjs` against the final setup. All workflow examples are fictional.

## Copy the website into another GitHub repository

The website repository is [ething238/assistlaneglobalwebsite](https://github.com/ething238/assistlaneglobalwebsite), with `main` as its default branch. The owner can manage repository access in GitHub settings.

To copy through GitHub, select `main`, choose **Code → Download ZIP**, and extract it. Create a repository in the destination GitHub account and upload the contents of the extracted folder, including all source modules and the complete `dist/` folder. Commit the files at the root of that repository.

To copy with Git and retain the website's commit history, create an empty repository in the destination account, then run the following commands. Replace `NEW-OWNER/NEW-REPOSITORY` with the destination repository's owner and name.

```sh
git clone --branch main --single-branch https://github.com/ething238/assistlaneglobalwebsite.git
cd assistlaneglobalwebsite
git remote set-url origin https://github.com/NEW-OWNER/NEW-REPOSITORY.git
git push -u origin HEAD:main
```

With Node.js installed, run `node build.mjs` from the repository root to regenerate the pages after editing the source. Serve `dist/` over local HTTP to review the website. The complete `dist/` directory can be published on a static website host.

The contact page and shared footer show support@assistlaneglobal.com and +91 7011956780. The Privacy Policy uses the same support email. These shared contact values are configured in `build.mjs`.

The enquiry forms use the user-supplied AssistLane public Web3Forms key in `form-config.mjs`. All 28 forms are enabled in the local preview, with required-field and phone validation, consent, spam protection, duplicate-submit protection, a timeout, and confirmed success/error feedback. Web3Forms manages the notification recipient; changing the visible contact email does not change that destination. The initial unavailable notice remains removed. Do not reuse the eThing key. Never put SMTP passwords or secret server credentials into these client files.

Run `node --test tests/*.test.mjs` to check form handling and delivery without sending email. Run `python tests/site_quality.py` to check generated HTML, routes, anchors, contacts, form markup and independent word and keyword counts. Building or committing this repository does not configure hosting or repair an unavailable origin server.
