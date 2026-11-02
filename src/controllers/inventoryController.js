const inventories=[];
let currentId=1;


//create a new inventory
exports.createInventory=(req,res)=>{
    const {name,category,quantity,price}=req.body;
    const inventory={id:currentId++,name,category,quantity,price};
    inventories.push(inventory);
    res.status(201).json(inventory);
};

//get all inventories
exports.getAllInventories=(req,res,next)=>{
try {
        let result = [...inventories];

        const { category, minQuantity, maxQuantity, search } = req.query;

        // Filter by category
        if (category) {
            result = result.filter(item =>
                item.category.toLowerCase() === category.toLowerCase()
            );
        }

        // Filter by minimum quantity
        if (minQuantity !== undefined) {
            const min = Number(minQuantity);

            if (!Number.isInteger(min) || min < 0) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid minimum quantity"
                });
            }

            result = result.filter(item => item.quantity >= min);
        }

        // Filter by maximum quantity
        if (maxQuantity !== undefined) {
            const max = Number(maxQuantity);

            if (!Number.isInteger(max) || max < 0) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid maximum quantity"
                });
            }

            result = result.filter(item => item.quantity <= max);
        }

        // Search by item name
        if (search) {
            result = result.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        res.status(200).json({
            success: true,
            count: result.length,
            data: result
        });

    } catch (error) {
        next(error);
    }
}
//get a inventory by id
exports.getInventoryById=(req,res)=>{
    const {id}=req.params;
    const inventory=inventories.find(b=>b.id===parseInt(id));
    if(!inventory){
return res.status(404).json("Inventory not found")
    }
    res.json(inventory)
}

//update a Inventory by id
exports.updateInventoryById = (req, res) => {
    const { id } = req.params;
    const inventory = inventories.find(i => i.id === parseInt(id));
    console.log(inventory);
    if (!inventory) {
        return res.status(404).json({ message: 'Inventory not found' });
    }
    const {  name,category, quantity, price} = req.body;
    if (name) {
        inventory.name = name;
    }
    if (category) {
        inventory.category = category;
    }
    if (quantity) {
        inventory.quantity = quantity;
    }
    if (price) {
        inventory.price = price;
    }
   
    res.json(inventory);
}

//partially update a inventoryby id
exports.partialUpdateInventoryById = (req, res) => {
    const { id } = req.params;
    const inventory = inventories.find(i => i.id === parseInt(id));
    if (!inventory) {
        return res.status(404).json({ message: 'Inventory not found' });
    }
    const { name, category, quantity, price } = req.body;
    if (name !== undefined) {
        inventory.name = name;
    }
    if (category !== undefined) {
        inventory.category = category;
    }
    if (quantity !== undefined) {
        inventory.quantity = quantity;
    }
    if (price !== undefined) {
        inventory.price = price;
    }
    res.json(inventory);
};


//delete a inventory by id
exports.deleteInventoryById = (req, res) => {
    const { id } = req.params;
    const inventoryIndex = inventories.findIndex(i => i.id === parseInt(id));
    if (inventoryIndex === -1) {
        return res.status(404).send({ message: 'Inventory not found' });
    }
    inventories.splice(inventoryIndex, 1);
    res.status(204).send();
};
//filter inventories based on query parameters
exports.filterItems = (req, res, next) => {
    try {
        let result = [...inventories]; // Create a copy of the inventories array to filter

        const { category, minQuantity, maxQuantity, search } = req.query;

        if (category) {
            result = result.filter(item =>
                item.category.toLowerCase() === category.toLowerCase()
            );
        }

        if (minQuantity !== undefined) {
            result = result.filter(item =>
                item.quantity >= Number(minQuantity)
            );
        }

        if (maxQuantity !== undefined) {
            result = result.filter(item =>
                item.quantity <= Number(maxQuantity)
            );
        }

        if (search) {
            result = result.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        res.status(200).json({
            success: true,
            count: result.length,
            data: result
        });
    } catch (error) {
        next(error);
    }
};
