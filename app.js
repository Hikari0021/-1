let isCustomerOffline = false;
let network = "present";
let networkDiagnosis = isCustomerOffline
? "You are offline" : network
? `The network is ${network} `
        : "The network is not present as this moment";
console.log(networkDiagnosis);




let name = "John"
for (let i = 0; i <= name.length; i++){
    console.log(name.charAt(i));
}
