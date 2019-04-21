/**
 * Created by ICOP on 2019-04-15.
 */
var EquipmentTenderResultListPage = require('./EquipmentTenderResultListPage');
var EquipmentTenderResultCardPage = require('./EquipmentTenderResultCardPage');
var PageRoutes = require('./PageRoutes');

EquipmentTenderResultRouter = (
    <Route path="equipmentTenderResult" component={PageRoutes}>
        <IndexRoute component={EquipmentTenderResultListPage}/>
        <Route path="card" component={EquipmentTenderResultCardPage}></Route>
    </Route>
)