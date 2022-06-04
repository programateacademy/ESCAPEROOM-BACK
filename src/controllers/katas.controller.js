import Kata from "../models/Kata";

export const createKata = async (req, res) => {
    const { name, description, baseKata, solution, group, creator_id, creator_name} = req.body;

    try {
        // Create / Insert new Kata
        const newKata = new Kata({
            name,
            description,
            baseKata,
            solution,
            group,
            creator_id,
            creator_name,
        });
    
        const kataSaved = await newKata.save();
    
        res.status(201).json(kataSaved);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};


export const getKatas = async (req, res) => {
    const katas = await Kata.find();
    return res.json(katas);

};

export const getKataById = async (req, res) => {
    const { kataId } = req.params;
    // Search Kata By ID
    const kata = await Kata.findById(kataId);
    res.status(200).json(kata);

};

export const updateKataById = async (req, res) => {
    // Update Kata
    const updatedKata = await Kata.findByIdAndUpdate(
        req.params.kataId,
        req.body,
        {
            new: true,
        }
    )
    res.status(204).json(updatedKata);
}

export const deleteKataById = async (req, res) => {
    const {  kataId } = req.params;

     // Delete Kata BY ID
    await Kata.findByIdAndDelete(kataId);

    res.status(204).json();

};