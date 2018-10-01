with import <nixpkgs> {};

mkShell {
  buildInputs = [ nodejs-10_x ];

  shellHook = ''
    export PATH="`pwd`/node_modules/.bin:$PATH"
    source ~/.web_ext_auth
  '';
}
