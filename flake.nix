{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";

  outputs =
    { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};

      inherit (pkgs) mkShell nixfmt-classic;
    in
    {
      devShells.${system}.default = mkShell { buildInputs = with pkgs; [ nodejs ]; };

      formatter.${system} = nixfmt-classic;
    };
}
