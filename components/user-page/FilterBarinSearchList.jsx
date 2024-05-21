import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from '../../constant';

const FilterBarinSearchList = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Bỏ trống', value: 'ss' },
    { label: 'Giá', value: 'apple' },
    { label: 'Sao', value: 'banana' },
  ]);
  const [openSort, setOpenSort] = useState(false);
  const [valueSort, setValueSort] = useState('apple');
  const [itemsSort, setItemsSort] = useState([
    { label: 'Tăng dần', value: 'apple' },
    { label: 'Giảm dần', value: 'banana' },
  ]);
  return (
    <View
      style={{
        paddingLeft: 28,
        zIndex: 1000,
        elevation: 1000,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 10
      }}
      className="justify-start"
    >
      <View>
        <DropDownPicker
          listMode="SCROLLVIEW"
          zIndex={3000}
          zIndexInverse={1000}
          open={open}
          style={{
            borderColor: Colors.primaryBackgroundColor,
          }}
          className="w-[160] border-primary"
          categorySelectable={true}
          placeholderStyle={{ color: 'grey' }}
          dropDownContainerStyle={{
            backgroundColor: 'white',
            zIndex: 1001,
            elevation: 1001,
            width: 160,
            borderColor: Colors.primaryBackgroundColor,
          }}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={'Sắp xếp theo'}
        />
      </View>
      <View>
        <DropDownPicker
          listMode="SCROLLVIEW"
          zIndex={2000}
          zIndexInverse={2000}
          open={openSort}
          style={{
            borderColor: Colors.primaryBackgroundColor,
          }}
          className="w-[100] border-primary"
          categorySelectable={true}
          placeholderStyle={{ color: 'grey' }}
          dropDownContainerStyle={{
            backgroundColor: 'white',
            zIndex: 1000,
            elevation: 1000,
            width: 100,
            borderColor: Colors.primaryBackgroundColor,
          }}
          value={valueSort}
          items={itemsSort}
          setOpen={setOpenSort}
          setValue={setValueSort}
          setItems={setItemsSort}
          placeholder={''}
        />
      </View>
    </View>
  );
};

export default FilterBarinSearchList;
