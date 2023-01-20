let  Bikevalues=[
    {
        "cusId":"TN93A4287",
        "cusName":"Thivinkanth",
        "cusContact":9514594679,
        "cusEmail":"thivinkanth@gmail.com",
        "cusDate":"06-06-2018"
    },
    {
        "cusId":"TN34V5063",
        "cusName":"Manojkumar",
        "cusContact":"9876543476",
        "cusEmail":"manojgeetha12.10@gmail.com",
        "cusDate":"23-03-2022"
    }
]
export const create=(data)=>
{
    Bikevalues.push(data)
}
export const list=()=>
{
    return Bikevalues;
}
export const read=(index)=>
{
    return Bikevalues[index];
}