var alphacallup;
var filtered;



console.log("hello");
fetch("alphacallup.txt")
  .then((x) => x.text())
  .then((alpha) => {
    alphacallup = alpha.split("\n").map((el) => {
      return el.split(" / ");
    })
    
    
    // .map(xray=>{
    //   if(xray.length!=4){console.log("daya gadbad hai") }
    //   beta= {}
    //   beta.callup=xray[0];
    //   beta.label=xray[1];
    //   beta.units=xray[2];
    //   beta.info=xray[3]
      
    //   return beta});

    console.dir(alphacallup);

    $('#example').DataTable( {
      fixedHeader: true,
      data: alphacallup,


      columnDefs: [
        {
          "targets": "_all",
            className:"dt-center",
        }
      ]
      
      // columns: [
      //     { data: 'location' },
      //     { data: 'partNumber' },
      //     { data: 'textinPlacard' },
      //     { data: 'imageLink',
      //     "render": function(data, type, row) {
      //       return '<img src="'+data+'" class = "modal-class" style="height:50px;width:100px;" onclick="myFunction()"/>';
      //   },
      // }
      // ]
    } )
  });

