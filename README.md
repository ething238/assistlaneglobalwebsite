# AssistLane Global — Virtual Assistant Services

The AssistLane Global website contains 33 HTML pages, its editable source modules, and local images, styles and interactions. The original layout was planned in the [design brief](https://docs.google.com/document/d/1O_Xmsa4ciOLrGJ3HWBRaBNjjSo4UxsiO144bAN-QaFU/edit?usp=sharing).

Open `dist/index.html` in a browser. The draft has no runtime dependencies. To change page layouts, edit `build.mjs`; for service content and FAQs, edit `content.mjs`. Run `node build.mjs` to regenerate the HTML. The shared styles and interactions are in `dist/site.css` and `dist/site.js`.

Edit `playbooks.mjs` for the original service scope tables, `catalogue-details.mjs` for expanded service and industry sections, and `specialist-services.mjs` or `specialist-industries.mjs` for the new playbooks. Their worked examples and handoffs are in `specialist-guides.mjs`. See `SERVICE-CATALOGUE.md` for the page map and `COMPETITOR-REVIEW.md` for the sources behind the guides.

The static build uses local WebP photos, with smaller sources for narrower layouts. Below the fold, images load on demand and cards animate once as they come into view. The cover diagrams stay still, and the animation respects the visitor’s reduced motion setting.

Before a public launch, confirm service scopes, specialist availability and delivery arrangements, add any approved team material and proof, confirm pricing and coverage, and add reviewed terms. The enquiry form validates entries in the browser. When connecting an enquiry route, add the privacy email and review the Privacy Policy in `build.mjs` against the final setup. All workflow examples are fictional.

## Copy the website into another GitHub repository

The current website is on the `main` branch of the private [RiTech01/Virtual-Assistant repository](https://github.com/RiTech01/Virtual-Assistant). The owner can give another person access through **Settings → Collaborators → Add people**. The recipient accepts the invitation before downloading or cloning the code.

To copy through GitHub, select `main`, choose **Code → Download ZIP**, and extract it. Create a repository in the destination GitHub account and upload the contents of the extracted folder, including all source modules and the complete `dist/` folder. Commit the files at the root of that repository.

To copy with Git and retain the website's commit history, create an empty repository in the destination account, then run the following commands. Replace `NEW-OWNER/NEW-REPOSITORY` with the destination repository's owner and name.

```sh
git clone --branch main --single-branch https://github.com/RiTech01/Virtual-Assistant.git
cd Virtual-Assistant
git remote set-url origin https://github.com/NEW-OWNER/NEW-REPOSITORY.git
git push -u origin HEAD:main
```

With Node.js installed, run `node build.mjs` from the repository root to regenerate the pages after editing the source. Open `dist/index.html` to review the website. The complete `dist/` directory can be published on a static website host.

Enquiry email delivery needs the planned Web3Forms connection. Add the privacy contact email when it is available. A domain and hosting can be configured separately in the destination account.
