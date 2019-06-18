/**
 * Check node_modules for licenses that don't match the whitelist,
 * and throw an error if any are found
 */

const checker = require('license-checker');

// List of acceptable licenses
const LICENSE_WHITELIST = [
  'APACHE-2.0',
  'BSD',
  'BSD-2-CLAUSE',
  'BSD-3-CLAUSE',
  'CC0-1.0',
  'CC-BY-3.0',
  'CC-BY-4.0',
  'FREEBSD',
  'ISC',
  'MIT',
  'PUBLIC DOMAIN',
  'UNLICENSE',
  'WTFPL'
].map(license => new RegExp(license, 'gi'));

// List of false negatives
const PACKAGE_WHITELIST = [
  'colors@0.6.2', // MIT
  'isnumeric@0.2.0', // MIT
  'mdn-data@1.1.4', // CCO-1.0
  'walkes@0.2.1' // LGPL-3.0 unmodified sub-dependency
];

const getLicences = (packages, key) => {
  const { licenses } = packages[key];
  if (typeof licenses !== 'string') {
    return String(licenses);
  }
  return licenses;
};

const checkLicense = (licenses) => Boolean(
  LICENSE_WHITELIST.find(regexp => licenses.match(regexp))
);

const checkPackage = (key) => Boolean(
  PACKAGE_WHITELIST.find(packageName => key === packageName)
);

checker.init({
  start: './'
}, function(err, packages) {
  if (err) {
    throw new Error(err);
  }
  const packageKeys = Object.keys(packages);
  const invalidPackages = [];

  packageKeys.forEach(key => {
    const licenses = getLicences(packages, key);
    if (!checkLicense(licenses) && !checkPackage(key)) {
      invalidPackages.push({ key, licenses });
    }
  });

  console.log(`Total dependencies: ${packageKeys.length}`);
  console.log(`Invalid dependencies: ${invalidPackages.length}`);

  if (invalidPackages.length) {
    const invalidLicenseInfo = invalidPackages
      .map(p => `${p.key}: ${p.licenses}`)
      .join('\n');

    throw new Error(
      `These dependencies have licenses that don't march the whitelist:\n${invalidLicenseInfo}`
    );
  }
});
