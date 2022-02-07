const connection = require("./engine")
const routes = require("./routes")
const numeral = require('numeral');


connection.set('view engine', 'ejs');
connection.set('views',"./Views");

connection.get(routes.index.url, (req, res) => {
    res.render(routes.index.view, 
        {
            title : routes.index.name, 
            uangAnda : "Anda Belum Memasukan Uang", 
            sisa : "Anda Belum Memasukan Uang", 
            seratusRB : " ",
            limapuluhRB : " ",
            duapuluhRB : " ",
            sepuluhRB : " ",
            limaRB : " ",
            duaRB : " ",
            seRB : " ",
            limaRT : " ",
            duaRT : " ",
            seRT : " "
        });
});

connection.post(routes.index.url, (req, res) => {
    var uangQ = Number(req.body.uang);
    
    var seratusRB = 0;
    var limapuluhRB = 0;
    var duapuluhRB = 0;
    var sepuluhRB = 0;
    var limaRB = 0;
    var duaRB = 0;
    var seRB = 0;
    var limaRT = 0;
    var duaRT = 0;
    var seRT = 0;

    while (uangQ > 100){
        if (100000 <= uangQ){
            uangQ -= 100000;
            seratusRB += 1;
        }
        else if (50000 <= uangQ){
            uangQ -= 50000;
            limapuluhRB += 1;
        }
        else if (20000 <= uangQ){
            uangQ -= 20000;
            duapuluhRB += 1;
        }
        else if (10000 <= uangQ){
            uangQ -= 10000;
            sepuluhRB += 1;
        }
        else if (5000 <= uangQ){
            uangQ -= 5000;
            limaRB += 1;
        }
        else if (2000 <= uangQ){
            uangQ -= 2000;
            duaRB += 1;
        }
        else if (1000 <= uangQ){
            uangQ -= 1000;
            seRB += 1;
        }
        else if (500 <= uangQ){
            uangQ -= 500;
            limaRT += 1;
        }
        else if (200 <= uangQ){
            uangQ -= 200;
            duaRT += 1;
        }
        else if (100 <= uangQ){
            uangQ -= 100;
            seRT += 1;
        }
        else {

        }
    }

    
    if(seratusRB == 0){
        seratusRB = " ";
    }

    if(limapuluhRB == 0){
        limapuluhRB = " ";
    }

    if(duapuluhRB == 0){
        duapuluhRB = " ";
    }
    
    if(sepuluhRB == 0){
        sepuluhRB = " ";
    }

    if(limaRB == 0){
        limaRB = " ";
    }

    if(duaRB == 0){
        duaRB = " ";
    }

    if(seRB == 0){
        seRB = " ";
    }

    if(limaRT == 0){
        limaRT = " ";
    }

    if(duaRT == 0){
        duaRT = " ";
    }

    if(seRT == 0){
        seRT = " ";
    }

    res.render(routes.index.view, 
        {
            title : routes.index.name, 
            uangAnda : 'Rp. ' + numeral(req.body.uang).format('0,0').replaceAll(',', '.')+',00',
            sisa : 'Rp. ' + numeral(uangQ).format('0,0').replaceAll(',', '.')+',00', 
            seratusRB : seratusRB,
            limapuluhRB : limapuluhRB,
            duapuluhRB : duapuluhRB,
            sepuluhRB : sepuluhRB,
            limaRB : limaRB,
            duaRB : duaRB,
            seRB : seRB,
            limaRT : limaRT,
            duaRT : duaRT,
            seRT : seRT
        });
});

module.exports = connection;
