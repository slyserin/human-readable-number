module.exports = function toReadable (number) {
    let mass = number.toString().split("").reverse()
    let result=""
    let mass1 = ["one","two","three","four","five", "six","seven","eight","nine"]
    let mass2 = [" ","twenty","thirty","forty","fifty", "sixty","seventy","eighty","ninety"]
    let mass3 = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    if (mass.length == 1){
        switch (mass[0]){
            case "0":result ="zero";break;
            case "1":result =mass1[0];break;
            case "2":result =mass1[1];break;
            case "3":result =mass1[2];break;
            case "4":result =mass1[3];break;
            case "5":result =mass1[4];break;
            case "6":result =mass1[5];break;
            case "7":result =mass1[6];break;
            case "8":result =mass1[7];break;
            case "9":result =mass1[8];break;
        }
    }
    if (mass.length == 2){
        switch (mass[1]){
            case "0":result = result;break;
            case "1":
                switch(mass[0]){
                    case "0":result = result +mass3[0];break;
                    case "1":result = result +mass3[1];break;
                    case "2":result = result +mass3[2];break;
                    case "3":result = result +mass3[3];break;
                    case "4":result = result +mass3[4];break;
                    case "5":result = result +mass3[5];break;
                    case "6":result = result +mass3[6];break;
                    case "7":result = result +mass3[7];break;
                    case "8":result = result +mass3[8];break;
                    case "9":result = result +mass3[9];break;
                }break;
            case "2":result = result +mass2[1] + " ";break;
            case "3":result = result +mass2[2]+ " ";break;
            case "4":result = result +mass2[3]+ " ";break;
            case "5":result = result +mass2[4]+ " ";break;
            case "6":result = result +mass2[5]+ " ";break;
            case "7":result = result +mass2[6]+ " ";break;
            case "8":result = result +mass2[7]+ " ";break;
            case "9":result = result +mass2[8]+ " ";break;
        }
        if (mass[1]!=1){
            switch (mass[0]){
                case "1":result = result +mass1[0];break;
                case "2":result = result +mass1[1];break;
                case "3":result = result +mass1[2];break;
                case "4":result = result +mass1[3];break;
                case "5":result = result +mass1[4];break;
                case "6":result = result +mass1[5];break;
                case "7":result = result +mass1[6];break;
                case "8":result = result +mass1[7];break;
                case "9":result = result +mass1[8];break;
            }
        }
        
    }
    if (mass.length == 3){
        switch (mass[2]){
            case "1":result = result +mass1[0] + " hundred ";break;
            case "2":result = result +mass1[1] + " hundred ";break;
            case "3":result = result +mass1[2]+ " hundred ";break;
            case "4":result = result +mass1[3]+ " hundred ";break;
            case "5":result = result +mass1[4]+ " hundred ";break;
            case "6":result = result +mass1[5]+ " hundred ";break;
            case "7":result = result +mass1[6]+ " hundred ";break;
            case "8":result = result +mass1[7]+ " hundred ";break;
            case "9":result = result +mass1[8]+ " hundred ";break;
        }
        switch (mass[1]){
            case "0":result = result;break;
            case "1":
                switch(mass[0]){
                    case "0":result = result +mass3[0];break;
                    case "1":result = result +mass3[1];break;
                    case "2":result = result +mass3[2];break;
                    case "3":result = result +mass3[3];break;
                    case "4":result = result +mass3[4];break;
                    case "5":result = result +mass3[5];break;
                    case "6":result = result +mass3[6];break;
                    case "7":result = result +mass3[7];break;
                    case "8":result = result +mass3[8];break;
                    case "9":result = result +mass3[9];break;
                }break;
            case "2":result = result +mass2[1] + " ";break;
            case "3":result = result +mass2[2]+ " ";break;
            case "4":result = result +mass2[3]+ " ";break;
            case "5":result = result +mass2[4]+ " ";break;
            case "6":result = result +mass2[5]+ " ";break;
            case "7":result = result +mass2[6]+ " ";break;
            case "8":result = result +mass2[7]+ " ";break;
            case "9":result = result +mass2[8]+ " ";break;
        }
        if (mass[1]!=1){
            switch (mass[0]){
                case "1":result = result +mass1[0];break;
                case "2":result = result +mass1[1];break;
                case "3":result = result +mass1[2];break;
                case "4":result = result +mass1[3];break;
                case "5":result = result +mass1[4];break;
                case "6":result = result +mass1[5];break;
                case "7":result = result +mass1[6];break;
                case "8":result = result +mass1[7];break;
                case "9":result = result +mass1[8];break;
            }
        }
    }
    return result.trim()
    
}
