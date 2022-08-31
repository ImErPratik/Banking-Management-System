import user from "../models/customers.js";



export async function createNewCustomer(data){
   

    let customer = new user(data);
    customer = await customer.save();

    return customer;
}

export async function getCustomerById(id){
    console.log(id,"----")


    return await user.findById(id).exec();

    
}

export async function getAllCustomer(){
    const customer =  await user.find().exec()

    return customer;
   
}

export async function deleteCustomerById(id){

    const customer = await user.findByIdAndDelete(id).exec();
    return customer;
}

export async function updateCustomerById(id,data){


    return await user.findByIdAndUpdate(id,data, {
        returnDocument: "after"
    }).exec();
    
   

}
