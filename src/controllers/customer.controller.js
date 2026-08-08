import Customer from '../models/customer.model.js'


//Encontrar customers
export const getCustomers = async (req,res) =>{
    const customers = await Customer.find()
    res.json(customers)
    
}
//Encontrar customer por ID
export const getCustomer = async (req,res) =>{
    const customer = await Customer.findById(req.param.id)
    if (!customer ) return res.status(404).json({message: "Customer not found"})
    
    res.json(customer)   
}
//Crear customer
export const createCustomer = async (req,res) =>{
    const {
        fullname,
        phone,
        bithday,
        description
    } = req.body
    
    try {
        const newCustomer = new Customer({
            fullname,
            phone,
            bithday,
            description
        }) 

        const customerSave = await newCustomer.save()
        res.json(customerSave)
    } catch (error) {
         res.status(500).json({message:error.message})
    }
}
//Eliminar customers
export const deleteCustomer = async (req,res) =>{
    const customer = await Customer.findByIdAndDelete(req.param.id)
    if (!customer ) return res.status(404).json({message: "Customer not found"})
    
    res.json(customer) 
}
//Actualizar customers
export const updateCustomer = async (req,res) =>{
    const customer = await Customer.findByIdAndUpdate(req.param.id, req.body, {new: true})
    if (!customer ) return res.status(404).json({message: "Customer not found"})
    
    res.json(customer) 
}

