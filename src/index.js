import DataSummary from 'components/insights/data-summary';
import EventIndicator from 'components/indicators/event-indicator';
import ExpandablePanel from 'components/insights/expandable-panel';
import Satellite from 'components/insights/satellite';
import SatelliteTrail from 'components/insights/satellite-trail';
import Progress from 'components/insights/progress';
import Swatch from 'components/insights/swatch';
import Tooltip from 'components/insights/tooltip';
import Dropdown from 'components/menus/dropdown';
import Icon from 'components/icon';
import MenuOption from 'components/menus/menu-option';
import {
  Button,
  Checkbox,
  Input,
  RadioButton,
  Switch
} from 'components/form-controls';

import './styles/app.css';

module.exports = {
  Insights: {
    DataSummary,
    ExpandablePanel,
    Satellite,
    SatelliteTrail,
    Progress,
    Swatch,
    Tooltip
  },
  Button,
  Checkbox,
  Dropdown,
  EventIndicator,
  Icon,
  Input,
  MenuOption,
  RadioButton,
  Switch
};
