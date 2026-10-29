# Sudipta Koushik Sarmah

<p>
  <a href="https://www.producthunt.com/products/axxess-triaxis?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-axxess-triaxis" target="_blank" rel="noopener noreferrer"><img alt="AXXESS TRIaxis - AI company brain for businesses premium AI prices out  | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1291289&amp;theme=light"></a>
  <a href="https://port4leo-sigma.vercel.app/u/axxess-triaxis"><img alt="PORT4LLEO Builder Score" src="https://port4leo-sigma.vercel.app/api/badge/axxess-triaxis"></a>
</p>

Founder and Managing Director, **Triaxis Ventures Private Limited**, co-founded with Ritashree Mahanta.

I build AI systems that organizations can govern: explainable, auditable, and with a human in the loop where it matters.

## One product to sell, four that run the company

Triaxis Ventures sells **AXXESS TRIaxis**. Everything else I build runs the company itself.
Triaxis Ventures is Tenant 0, the dogfooded tenant, on every one of these apps, AXXESS included.
That is where I do QA, audits, UX testing, walkthroughs, and the improvements that pilot and
survey feedback ask for.

| Product | What it does for Triaxis | State, checked 2026-10-29 |
|---|---|---|
| [**AXXESS TRIaxis**](https://github.com/axxess-triaxis/AXXESSTRIAXIS) | **The product we sell.** An AI operating platform for regulated organizations: AI orchestration, policy enforcement, workflows, connectors, human-in-the-loop review and audit evidence. Next.js, TypeScript, Supabase, Capacitor (web, iOS, Android). | [Live Beta](https://landing.triaxisventures.com) (sign-in), [investor demo](https://investor.triaxisventures.com), [AXXESS Lite](https://lite.triaxisventures.com) |
| [**PORT4LLEO**](https://github.com/axxess-triaxis/port4lleo) | Governance, security checks, builder analysis and product improvements: a GitHub App that audits repos and scores how a builder ships. | Live at [port4leo-sigma.vercel.app](https://port4leo-sigma.vercel.app) |
| [**Callismatic**](https://github.com/axxess-triaxis/callismatic) | Sales and outreach: triages inbound calls, voicemails and WhatsApp messages, researches leads, and places callbacks. | Live on AWS Lambda (us-east-1) |
| [**Omnidamus**](https://github.com/axxess-triaxis/Omnidamus) | SMS, WhatsApp and email outreach and customer service, as one conversation across channels. | Deployed on AWS (ap-southeast-2); WhatsApp sending blocked on Meta's display-name review ([evidence](https://github.com/axxess-triaxis/Omnidamus/blob/master/docs/LIVE_VERIFICATION.md)) |
| [**STILL**](https://github.com/axxess-triaxis/STILL) | Joins them into one stack: an Amazon EventBridge bus on which Callismatic leads and Omnidamus completed conversations become AXXESS tasks. | Deployed; STILL to AXXESS verified live 2026-10-29. Callismatic and Omnidamus publishing switched on 2026-10-29, end-to-end check pending |

**The aim.** A roughly 80% automated startup, with me as the human in the loop: AXXESS builds,
sells, serves customers, tests and does marketing outreach on itself, through these products.
I want Triaxis Ventures to be a repeatable, very low-cost, lean prototype of an AI-native startup.

**What it costs.** Every product except AXXESS TRIaxis was built at zero incremental cost
(*founder-stated, source artifact needed*). The known running costs are small and paid from AWS
credits: STILL is estimated at under USD 2 a month, Omnidamus keeps a Route 53 zone at USD 0.50
a month, and Amazon Bedrock tokens are billed per use.

## Other open source

| Project | What it is |
|---|---|
| [RepoWatch](https://github.com/axxess-triaxis/RepoWatch) | The governance auditor PORT4LLEO's audits grew out of: Dependabot alerts, stale PRs, untested deploys, exposed PII, repo sprawl. A CLI and a Claude Code plugin. |
| [RepoWatch GitHub App](https://github.com/axxess-triaxis/repowatch-app) | RepoWatch as a GitHub App that posts a weekly audit as one issue. The AWS CDK code is built and the listing pages are live; the AWS backend is not deployed yet. |
| [GEOINT-X](https://github.com/axxess-triaxis/geoint-x) | Geospatial change intelligence for Assam: Sentinel-2 land-use change and wetland encroachment monitoring with a human verification workflow. Live at [geoint-x.vercel.app](https://geoint-x.vercel.app). |

## Hackathon builds

| Project | Event | What it is |
|---|---|---|
| [Omnidamus](https://github.com/axxess-triaxis/Omnidamus) | AWS CDS Agentic AI Partner Hackathon | Cross-channel conversation agent (see above) |
| [Callismatic](https://github.com/axxess-triaxis/callismatic) | Agents for Humans and Call-E (both submitted 2026-09-14), plus others [listed in its README](https://github.com/axxess-triaxis/callismatic#callismatic) | Sales and outreach agent (see above) |
| [GEOINT-X](https://github.com/axxess-triaxis/geoint-x) | North-East SEVA FIRST Innovation Challenge 2026 (NESFIC-D-21, D-17) | Land-use change and encroachment monitoring |
| [CopperNick-Vision](https://github.com/axxess-triaxis/CopperNick-Vision) | Build with AI: Code for Communities (hack2skill / Google Cloud), Track 05 | Cyclone impact and infrastructure vulnerability forecaster, with passive sky scanning. API live on [Cloud Run](https://coppernick-222356459208.asia-south1.run.app/docs) |
| [Picketty](https://github.com/axxess-triaxis/Picketty) | AI Infra Summit 2026 (Intel online track, Speechmatics bonus track) | Simulated two-arm robot that sets a table from a spoken instruction |
| [GALL-e-LEO](https://github.com/axxess-triaxis/GALL-e-LEO) | GOSIM Agent Observer | Sky-survey scheduling agent |
| [RepoWatch](https://github.com/axxess-triaxis/RepoWatch) | IBM Bob 2.0 Hackathon | Engineering governance auditor |

Also benchmarking on ARC-AGI (abstract reasoning) in my fork of
[arc-agi-benchmarking](https://github.com/axxess-triaxis/arc-agi-benchmarking): a Groq adapter,
2 of 2 on the ARC-AGI-2 public demo tasks, and a first ARC-AGI-3 baseline of 0 of 7 levels.

## How I hold claims

Every status above links to something you can check: a live URL, a PR, or a verification doc.
Anything I can't yet back with an artifact is marked founder-stated. The full evidence rules for
AXXESS are in its [CLAUDE.md](https://github.com/axxess-triaxis/AXXESSTRIAXIS/blob/main/CLAUDE.md).

## Stack

TypeScript · Python · Next.js · React · Supabase · AWS (Lambda, EventBridge, SAM, CDK, Bedrock) · Capacitor · Vercel

## GitHub activity

![GitHub metrics for axxess-triaxis](https://raw.githubusercontent.com/axxess-triaxis/axxess-triaxis/main/metrics.svg)
