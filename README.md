# AssistLane Global — Virtual Assistant Services

The AssistLane Global website contains 32 HTML pages, its editable source modules, and local images, styles and interactions. The original layout was planned in the [design brief](https://docs.google.com/document/d/1O_Xmsa4ciOLrGJ3HWBRaBNjjSo4UxsiO144bAN-QaFU/edit?usp=sharing).

Run `python preview.py --port 4357` to preview the site, then open `http://127.0.0.1:4357/`. This local server supports the same clean paths and legacy redirects as the Apache configuration; a basic static file server does not apply `.htaccess` rules. The site has no runtime dependencies. To change page layouts, edit `build.mjs`; for service content and FAQs, edit `content.mjs`. Run `node build.mjs` to regenerate the HTML. The shared styles and interactions are in `dist/site.css` and `dist/site.js`.

The homepage introduces general virtual assistant support and has one dedicated bookkeeping section. Bookkeeping is listed under Services in the header rather than as a separate navigation item. All 32 pages use the simpler reading layout. `editorial-pages.mjs` groups detailed examples and planning topics into expandable sections while retaining service-specific information. The build enforces at least 1,500 editorial words per page, excluding the header, footer, shared contact banner, forms and navigation. The complete page must also remain within 2,000 words. `dist/word-counts.json` records both counts for every page. The build stops before replacing pages if either requirement fails.

The homepage introduces services, bookkeeping, getting started, industries and the founder, with practical guidance and FAQs below. The Services and Industries header dropdowns show all 12 services and all 11 industries respectively, with an individual graphic beside every entry. Every footer also includes the complete service and industry lists, with links to both directories. The primary contact action is labelled “Get in touch”. Old .html page links redirect to the corresponding clean URL. Phone numbers are optional in the enquiry form; entered numbers are still validated. The word count includes complete FAQ answers and expandable guidance. FAQ headings and questions share the same centred content container and side margins.

`editorial-keywords.mjs` contains reviewed wording for the existing primary keywords. Coverage is **exact phrase mentions × phrase word count ÷ editorial word count × 100**. The build enforces exactly 2% on the 28 pages with configured primary keywords. The two development pages, Privacy Policy and 404 page have no primary keyword configured and are marked not applicable. `dist/keyword-density.json` records the phrase, mentions, coverage and raw phrase frequency for every page. `legacy-anchors.mjs` preserves original fragment targets when the public page path changes.

Edit `playbooks.mjs` for the original service scope tables, `catalogue-details.mjs` for expanded service and industry sections, and `specialist-services.mjs` or `specialist-industries.mjs` for the new playbooks. Their worked examples and handoffs are in `specialist-guides.mjs`. See `SERVICE-CATALOGUE.md` for the page map and `COMPETITOR-REVIEW.md` for the sources behind the guides.

The static build uses local WebP photos, with smaller sources for narrower layouts. Below the fold, images load on demand and cards animate once as they come into view. The cover diagrams stay still, and the animation respects the visitor’s reduced motion setting.

Before a public launch, confirm service scopes, specialist availability and delivery arrangements, add any approved team material and proof, confirm pricing and coverage, and add reviewed terms. The enquiry form validates entries in the browser. When connecting an enquiry route, review the Privacy Policy in `build.mjs` against the final setup. All workflow examples are fictional.

## Clean URLs and deployment

Public pages use paths such as `/about`, `/services`, `/industry-real-estate` and `/trust`; the homepage uses `/`. The generated `.html` filenames remain internal files. All rendered links, canonical tags, Open Graph URLs and the sitemap use clean public paths.

Both `.htaccess` files support extensionless pages and permanent redirects from old `.html` links, while preserving query parameters and fragment targets. The root configuration serves `dist/` when the whole repository is deployed. `dist/.htaccess` supports deployments where `dist/` itself is the document root. Include the applicable hidden `.htaccess` file when publishing. The hosting deployment must use the latest GitHub version for these routes to become live.

Run `node --test tests/routes.test.mjs`, `python tests/test_clean_urls.py` and `python tests/site_quality.py` to check clean references, local HTTP routing, old-link redirects and content integrity. The Python HTTP checks verify the local preview; the live Apache rules are applied by the hosting deployment.

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

With Node.js installed, run `node build.mjs` from the repository root to regenerate the pages after editing the source. Run `python preview.py --port 4357` to review the website. The complete `dist/` directory can be published on a static website host.

The contact page and shared footer show support@assistlaneglobal.com and +91 7011956780. The Privacy Policy uses the same support email. These shared contact values are configured in `build.mjs`.

The enquiry forms use the user-supplied AssistLane public Web3Forms key in `form-config.mjs`. All 28 forms are enabled in the local preview, with required-field and phone validation, consent, spam protection, duplicate-submit protection, a timeout, and confirmed success/error feedback. Web3Forms manages the notification recipient; changing the visible contact email does not change that destination. The initial unavailable notice remains removed. Do not reuse the eThing key. Never put SMTP passwords or secret server credentials into these client files.

Run `node --test tests/*.test.mjs` to check form handling and delivery without sending email. Run `python tests/site_quality.py` to check generated HTML, routes, anchors, contacts, form markup and independent word and keyword counts. Building or committing this repository does not configure hosting or repair an unavailable origin server.
