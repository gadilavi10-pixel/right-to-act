# Execution Risk Brief integration

## Final route

The brief is packaged as a native static route at:

https://decimag.com/execution-risk

The repository path is `execution-risk/index.html`. On a conventional static host, both `/execution-risk` and `/execution-risk/` should resolve to that file. The host should be configured to normalize the canonical URL to the no-trailing-slash form shown above.

## Integration point

This package extends the existing DECIMAG static website rather than introducing a second permanent application stack. The brief remains visually self-contained, but its header links back to the DECIMAG homepage and Research area.

Files added or changed for this integration:

- `execution-risk/index.html` — the approved brief, with route-specific metadata and restrained DECIMAG navigation.
- `research.html` — adds the brief as a separate Research & Resources item while keeping the published Right-to-Act paper distinct.
- `technology.html` — adds one contextual link from the Right-to-Act / execution-layer explanation.

## Main-site entry points

- Research & Resources card:
  - Title: The Execution Risk Gap
  - Description: Post-Compromise Security, Agentic AI and Pre-Execution Legitimacy.
  - CTA: Read the brief →
- Technology contextual link:
  - Read how this applies to post-compromise and agentic execution risk →

No top-level Cybersecurity navigation item was added, and the homepage was not repositioned around cybersecurity.

## Resource distinction

- Right-to-Act: A Pre-Execution Non-Compensatory Decision Protocol for AI Systems links to the published arXiv paper.
- The Execution Risk Gap links to the DECIMAG content page at `/execution-risk` and is presented as an investor/technical brief, not an academic paper.

## Metadata

The integrated page includes:

- Title: The Execution Risk Gap | DECIMAG
- Meta description: Why valid access and technical permission are not enough to establish the Right-to-Act. DECIMAG on post-compromise security, agentic AI and pre-execution legitimacy.
- Canonical URL: https://decimag.com/execution-risk
- Open Graph and Twitter sharing metadata using the same claim-safe title and description.

## Deployment status

Nothing in this package has been deployed. DNS was not changed. The existing GitHub Pages Right-to-Act Brief was not deleted or redirected; its migration remains a separate deployment decision.
