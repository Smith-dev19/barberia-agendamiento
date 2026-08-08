import workingHours from "../models/workingHours.model.js";

//Traer horario
export const getWorks = async (req, res) =>{
    const works = await workingHours.find()
    res.json(works)
}

// traer horario especifico
export const getWork = async (req,res) =>{
    const work = await workingHours.findById()
    if(!work) res.status(404).json({message: "Hour not found"})
    res.json(work)
}

// Crear horario

export const createWork = async (req,res) =>{
    const {
        dayOfWeek,
        startTime,
        endTime,
        active 
    } = req.body

   try {
     console.log("cuerpo req.user.id: ",req.user.id)
    const newWork = new workingHours(
        {
        barber: req.user.id, // Se puede actualizar en el futuro para poder escoger el user sin necesidad de ser automatico.
        dayOfWeek,
        startTime,
        endTime,
        active 
        }
    )

    console.log("horario creado", newWork)

    const workSave = await newWork.save()
    
    console.log()
    res.json("guardado",workSave)
    
   } catch (error) {
    res.status(500).json({message:error.message})
   } 
}