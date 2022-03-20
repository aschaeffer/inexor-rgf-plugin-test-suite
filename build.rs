use static_files::NpmBuild;
use std::env;
use std::io::Result;
use std::path::Path;

const WEB_APP_BASE_DIR: &str = "web";
const YARN_BIN: &str = "web/node_modules/yarn/bin/yarn";
const BUNDLE_DIR: &str = "web/build";

fn main() -> Result<()> {
    let dir = env::var("CARGO_MANIFEST_DIR").unwrap();
    let path = Path::new(&dir).join(YARN_BIN);
    println!("CARGO_MANIFEST_DIR={}", dir.as_str());
    println!("PATH={}", path.to_str().unwrap());
    let result = NpmBuild::new(WEB_APP_BASE_DIR)
        .executable(path.to_str().unwrap())
        .install()
        .unwrap()
        .run("build")
        .unwrap()
        .target(BUNDLE_DIR)
        .to_resource_dir()
        .build();
    println!("cargo:rerun-if-changed={}", WEB_APP_BASE_DIR);
    result
}
