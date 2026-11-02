const express=require('express');
const app=express();

const inventoryRoutes=require('./routes/inventoryRoutes');
app.use(express.json());

app.use("/inventories",inventoryRoutes);
const PORT=3002;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});