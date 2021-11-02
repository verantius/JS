const companies = [
    {name: "Apple", category: "Technology", start: "1995", end:"2022"},
    {name: "Facebook", category: "Social Media", start: "2007", end:"2021"},
    {name: "General Motors", category: "Automobile", start: "1977", end:"2021"},
    {name: "State Street", category: "Finance", start: "2010", end:"2021"},
    {name: "H&M", category: "Retail", start: "1988", end:"2019"},
    {name: "Zara", category: "Retail", start: "1989", end:"2020"},
    {name: "House", category: "Retail", start: "2001", end:"2021"},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]

    // for (var i = 0; i < companies.length; i++) {
    //     console.log(companies[i])
    // }

//----forEach----
    // companies.forEach(function(company) {
    //     console.log(company.name)
    // });

//----filter----
    //let canDrink = [];
    // for (let i = 0; i < ages.length; i++){
    //     if (ages[i] >= 21)
    //         canDrink.push(ages[i])
    // }

    //---- ---- 
    // const canDrink = ages.filter(function(age) {
    //     if(age >= 21)
    //         return true;
    // })

    //----filter age----
    // const canDrink = ages.filter(age => age >= 21)
    // console.log(canDrink)

    //----filter companies----
    // const reatilCompanies = companies.filter(function(company) {
    //     if(company.category === 'Retail')
    //         return true
    // })


    console.log(reatilCompanies)
//----map----

//----sort----

//----reduce----

