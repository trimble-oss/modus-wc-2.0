# QA Approval Workflow Setup

This document describes how to configure the QA approval gate for pull requests.

## Overview

The QA Approval workflow provides a manual approval gate that QA team members can use to approve pull requests before they can be merged. This creates a button in the PR's Checks tab that QA can click to approve.

## Setup Instructions

### Step 1: Configure the GitHub Environment

1. Go to the repository's **Settings** > **Environments**
2. Click **New environment**
3. Name it `qa-review`
4. Check **Required reviewers**
5. Add the following QA team members:
   - `jewel-shajan`
   - `Kavin-Trimble`
6. Click **Save protection rules**

### Step 2: Add Branch Protection Rule

1. Go to **Settings** > **Branches** > **Branch protection rules**
2. Edit the existing rule for `main` (or create one if it doesn't exist)
3. Under **Require status checks to pass before merging**:
   - Search for and add `QA Approval`
4. Save changes

## How It Works

1. When a PR is opened against `main`, the `QA Approval` workflow starts automatically
2. The workflow pauses at the `qa-approval` job, waiting for environment approval
3. In the PR's **Checks** tab, QA will see a "Waiting" or "Review pending" status
4. QA clicks the **Review pending** link, then clicks **Approve and deploy** to approve
5. The workflow completes with a passing status
6. The branch protection rule sees the passing check and allows merging

## QA Team Members

The following users are authorized to approve PRs:

| GitHub Username | Role |
|-----------------|------|
| `jewel-shajan` | QA |
| `Kavin-Trimble` | QA |

To add or remove QA approvers, update the `qa-review` environment settings in the repository.

