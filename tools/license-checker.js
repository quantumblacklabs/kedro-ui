/**
 * Check node_modules for licenses that don't match the whitelist,
 * and throw an error if any are found
 */

const checker = require('license-checker');

const LICENSE_WHITELIST = [
  'AFLV2.1',
  'APACHE',
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
    const licenseIsValid = checkLicense(licenses);
    if (!licenseIsValid) {
      invalidPackages.push({
        key,
        licenses
      });
    }
  });

  console.log(`Total dependencies: ${packageKeys.length}`);
  console.log(`Invalid dependencies: ${invalidPackages.length}`);

  if (invalidPackages.length) {
    const invalidLicenseInfo = invalidPackages
      .map(({ key, licenses }) => `${key}: ${licenses}`)
      .join('\n');

    throw new Error(
      `These dependencies have licenses that don't march the whitelist:\n${invalidLicenseInfo}`
    );
  }
});
