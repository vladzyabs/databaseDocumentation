import React                                    from 'react';
import { Button, Checkbox, DatePicker, Select } from 'antd';
import { Moment }                               from 'moment';
import { MinusOutlined, PlusOutlined }          from '@ant-design/icons';
import { useDispatch, useSelector }             from 'react-redux';

import { viewActions } from './actions';

import { RootStoreType } from '../../store';

type SelectType
  = 'All'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
type Store = {
  date: Moment | null
  selected: SelectType
  checked: boolean
}

const View: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector<RootStoreType, number>(({dashboard}) => dashboard.count);

  const [store, changeStore] = useStore<Store>({
    date:     null,
    selected: 'All',
    checked:  false,
  });

  const handleClickBtn = React.useCallback(
    (inc: boolean) => inc
      ? dispatch(viewActions.increment())
      : dispatch(viewActions.decrement()),
    [dispatch]
  );

  return (
    <div className={'view'} style={{width: 400, margin: '100px auto'}}>
      <Select defaultValue={'All'} onChange={(value) => changeStore('selected', value)}>
        <Select.Option value={'All'}>All</Select.Option>
        <Select.Option value={'1'}>1</Select.Option>
        <Select.Option value={'2'}>2</Select.Option>
        <Select.Option value={'3'}>3</Select.Option>
        <Select.Option value={'4'}>4</Select.Option>
      </Select>
      <DatePicker onChange={(value) => changeStore('date', value)} />
      <Checkbox onChange={(e) => changeStore('checked', e.target.checked)} />
      <div>
        <Button icon={<PlusOutlined />} onClick={() => handleClickBtn(true)} />
        <Button icon={<MinusOutlined />} onClick={() => handleClickBtn(false)} />
      </div>
      <hr />
      <div>{count}</div>
      <div style={{marginTop: 16}}>
        Selected Date: {store.date ? store.date.format('YYYY-MM-DD') : 'None'}
      </div>
      <div>
        {store.selected}
      </div>
      <div>
        {store.checked ? 'true' : 'false'}
      </div>
    </div>
  );
};

type UseStore = <S>(initialStore: S) => [S, (key: string, value: any) => void]
const useStore: UseStore = <S, >(initialStore: S) => {
  const [store, setStore] = React.useState<S>(initialStore);

  const changeStore = (key: string, value: any) => setStore(prevState => ({
    ...prevState,
    [key]: value,
  }));

  return [
    store,
    changeStore,
  ];
};

export default View;