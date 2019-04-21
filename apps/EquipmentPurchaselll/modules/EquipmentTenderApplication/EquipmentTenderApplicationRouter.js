/**
 * Created by ICOP on 2019-04-15.
 */
var EquipmentTenderApplicationListPage = require('./EquipmentTenderApplicationListPage');
var EquipmentTenderApplicationCardPage = require('./EquipmentTenderApplicationCardPage');
var PageRoutes = require('./PageRoutes');

EquipmentTenderApplicationRouter = (
    <Route path="equipmentTenderApplication" component={PageRoutes}>
        <IndexRoute component={EquipmentTenderApplicationListPage}/>
        <Route path="card" component={EquipmentTenderApplicationCardPage}></Route>
    </Route>
)