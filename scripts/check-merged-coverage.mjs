// Merges the coverage-final.json files produced by sharded Jest runs and
// enforces the same 100% global threshold as stencil.config.ts.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import libCoverage from 'istanbul-lib-coverage';

const dir = process.argv[2] ?? 'coverage-shards';
const THRESHOLD = 100;

const map = libCoverage.createCoverageMap({});
const files = readdirSync(dir, { recursive: true }).filter((f) =>
  String(f).endsWith('coverage-final.json')
);

if (files.length === 0) {
  console.error(`No coverage-final.json files found in ${dir}`);
  process.exit(1);
}

for (const file of files) {
  map.merge(JSON.parse(readFileSync(join(dir, String(file)), 'utf8')));
}

const summary = map.getCoverageSummary().toJSON();
let failed = false;

for (const metric of ['statements', 'branches', 'functions', 'lines']) {
  const { pct, covered, total } = summary[metric];
  const ok = pct >= THRESHOLD;
  failed ||= !ok;
  console.log(
    `${ok ? 'OK  ' : 'FAIL'} ${metric}: ${pct}% (${covered}/${total}), required ${THRESHOLD}%`
  );
}

console.log(`Merged ${files.length} shard report(s)`);
process.exit(failed ? 1 : 0);
