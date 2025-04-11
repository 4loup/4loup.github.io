{
  description = "Astro development environment for 4loup dev blog";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [];
        };

        nodeVersion = "22";

        nodePackages = pkgs.nodePackages.override {
          nodejs = pkgs."nodejs-${nodeVersion}_x";
        };
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs
            pnpm
          ];

          shellHook = ''
            echo "Astro dev shell"
            echo "Node.js version: $(node --version)"
            echo "pnpm version: $(pnpm --version)"
            echo "Astro CLI version: $(astro --version || echo 'not installed')"
          '';
        };
      }
    );
}
