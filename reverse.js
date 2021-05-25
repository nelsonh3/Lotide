var args = process.argv.slice(2);

function reverse(args) {
  for (var i = 0; i < args.length; i++){
    var revstr = "";

    for (var j = args[i].length-1; j>= 0; j--) {
      revstr += args[i][j];
      console.log(args[i][j])
    }
    console.log(revstr);
  }
}

reverse(args);