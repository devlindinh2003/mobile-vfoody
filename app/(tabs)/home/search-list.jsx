import React from 'react';
import { FlatList, SectionList, View } from 'react-native';
import ItemBodyInSearchList from '../../../components/user-page/ItemBodyInSearchList';
import ItemHeaderInSearchList from '../../../components/user-page/ItemHeaderInSearchList';

const SearchList = () => {
  return (
    <View className="flex-1 mt-5">
      <SectionList
        className="flex-1"
        contentContainerStyle={{}}
        keyExtractor={(item, index) => index}
        sections={data}
        scrollEnabled={false}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title, data } }) => (
          <>
            <View className="flex-1 mb-10" style={{

            }}>
              <ItemHeaderInSearchList item={title} />

              <FlatList
                className="px-7 flex-1 w-full"
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      width: 10,
                      height: 1,
                    }}
                  />
                )}
                renderItem={({ item }) => <ItemBodyInSearchList item={item} />}
              />
            </View>
          </>
        )}
        renderItem={({ item }) => null}
      />
    </View>
  );
};

export default SearchList;

const data = [
  {
    title: {
      shopName: 'Bún bò huế Phú Lộc',
      star: 3.5,
      title: 'Bún - PHở - cơm',
      banner:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4fVcExYeQOa4L3AahyuyAh4rlLfaKuHd6EWJZAlcKSUYVJS7IcugGE1impKxwfJDTvU&usqp=CAU',
      avatar:
        'https://ih1.redbubble.net/image.2997619924.6331/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      address: 'Tòa S1001',
      price: '12k -> 30k',
    },
    data: [
      {
        id: 1,
        name: 'Bún bò bắp',
        image:
          'https://file.hstatic.net/200000395159/article/nau-bun-bo-hue-chuan-vi-tai-nha-voi-cot-co-dac-quoc-viet-foods_59b7ba1543004e67967af718d8afc32b.jpg',
        price: '30k',
      },
      {
        id: 2,
        name: 'Bún bò tái',
        price: '30k',
        image: 'https://nethue.com.vn/uploaded/tin-tuc-biquyet-1.jpg',
      },
      {
        id: 3,
        name: 'Bún bò sườn',
        price: '40k',
        image: 'https://nethue.com.vn/uploaded/tin-tuc-biquyet-1.jpg',
      },
      {
        id: 4,
        name: 'Bún bò giò',
        price: '50k',
        image:
          'https://www.cooking-therapy.com/wp-content/uploads/2023/10/Bun-Bo-Hue-Recipe-13.jpg',
      },
      {
        id: 6,
        name: 'Bún bò giò',
        price: '50k',
        image:
          'https://www.cooking-therapy.com/wp-content/uploads/2023/10/Bun-Bo-Hue-Recipe-13.jpg',
      },
      {
        id: 5,
        name: 'Bún bò giò',
        price: '50k',
        image:
          'https://www.cooking-therapy.com/wp-content/uploads/2023/10/Bun-Bo-Hue-Recipe-13.jpg',
      },
    ],
  },
  {
    title: {
      shopName: 'Bún bò huế Phú Lộc',
      star: 3.5,
      title: 'Bún - PHở - cơm',
      banner:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4fVcExYeQOa4L3AahyuyAh4rlLfaKuHd6EWJZAlcKSUYVJS7IcugGE1impKxwfJDTvU&usqp=CAU',
      avatar:
        'https://ih1.redbubble.net/image.2997619924.6331/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      address: 'Tòa S1001',
      price: '12k -> 30k',
    },
    data: [
      {
        id: 1,
        name: 'Bún bò bắp',
        image:
          'https://file.hstatic.net/200000395159/article/nau-bun-bo-hue-chuan-vi-tai-nha-voi-cot-co-dac-quoc-viet-foods_59b7ba1543004e67967af718d8afc32b.jpg',
        price: '30k',
      },
      {
        id: 2,
        name: 'Bún bò tái',
        price: '30k',
        image: 'https://nethue.com.vn/uploaded/tin-tuc-biquyet-1.jpg',
      },
      {
        id: 3,
        name: 'Bún bò sườn',
        price: '40k',
        image: 'https://nethue.com.vn/uploaded/tin-tuc-biquyet-1.jpg',
      },
      {
        id: 4,
        name: 'Bún bò giò',
        price: '50k',
        image:
          'https://www.cooking-therapy.com/wp-content/uploads/2023/10/Bun-Bo-Hue-Recipe-13.jpg',
      },
    ],
  },
  {
    title: {
      shopName: 'Bún bò huế Phú Lộc',
      star: 3.5,
      title: 'Bún - PHở - cơm',
      banner:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4fVcExYeQOa4L3AahyuyAh4rlLfaKuHd6EWJZAlcKSUYVJS7IcugGE1impKxwfJDTvU&usqp=CAU',
      avatar:
        'https://ih1.redbubble.net/image.2997619924.6331/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      address: 'Tòa S1001',
      price: '12k -> 30k',
    },
    data: [
      {
        id: 1,
        name: 'Bún bò bắp',
        image:
          'https://file.hstatic.net/200000395159/article/nau-bun-bo-hue-chuan-vi-tai-nha-voi-cot-co-dac-quoc-viet-foods_59b7ba1543004e67967af718d8afc32b.jpg',
        price: '30k',
      },
      {
        id: 2,
        name: 'Bún bò tái',
        price: '30k',
        image: 'https://nethue.com.vn/uploaded/tin-tuc-biquyet-1.jpg',
      },
      {
        id: 3,
        name: 'Bún bò sườn',
        price: '40k',
        image: 'https://nethue.com.vn/uploaded/tin-tuc-biquyet-1.jpg',
      },
      {
        id: 4,
        name: 'Bún bò giò',
        price: '50k',
        image:
          'https://www.cooking-therapy.com/wp-content/uploads/2023/10/Bun-Bo-Hue-Recipe-13.jpg',
      },
    ],
  },
  {
    title: {
      shopName: 'Bún bò huế Phú Lộc',
      star: 3.5,
      title: 'Bún - PHở - cơm',
      banner:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4fVcExYeQOa4L3AahyuyAh4rlLfaKuHd6EWJZAlcKSUYVJS7IcugGE1impKxwfJDTvU&usqp=CAU',
      avatar:
        'https://ih1.redbubble.net/image.2997619924.6331/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      address: 'Tòa S1001',
      price: '12k -> 30k',
    },
    data: [
      {
        id: 1,
        name: 'Bún bò bắp',
        image:
          'https://file.hstatic.net/200000395159/article/nau-bun-bo-hue-chuan-vi-tai-nha-voi-cot-co-dac-quoc-viet-foods_59b7ba1543004e67967af718d8afc32b.jpg',
        price: '30k',
      },
      {
        id: 2,
        name: 'Bún bò tái',
        price: '30k',
        image: 'https://nethue.com.vn/uploaded/tin-tuc-biquyet-1.jpg',
      },
      {
        id: 3,
        name: 'Bún bò sườn',
        price: '40k',
        image: 'https://nethue.com.vn/uploaded/tin-tuc-biquyet-1.jpg',
      },
      {
        id: 4,
        name: 'Bún bò giò',
        price: '50k',
        image:
          'https://www.cooking-therapy.com/wp-content/uploads/2023/10/Bun-Bo-Hue-Recipe-13.jpg',
      },
    ],
  },
  {
    title: {
      shopName: 'Bún bò huế Phú Lộc',
      star: 3.5,
      title: 'Bún - PHở - cơm',
      banner:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4fVcExYeQOa4L3AahyuyAh4rlLfaKuHd6EWJZAlcKSUYVJS7IcugGE1impKxwfJDTvU&usqp=CAU',
      avatar:
        'https://ih1.redbubble.net/image.2997619924.6331/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      address: 'Tòa S1001',
      price: '12k -> 30k',
    },
    data: [
      {
        id: 1,
        name: 'Bún bò bắp',
        image:
          'https://file.hstatic.net/200000395159/article/nau-bun-bo-hue-chuan-vi-tai-nha-voi-cot-co-dac-quoc-viet-foods_59b7ba1543004e67967af718d8afc32b.jpg',
        price: '30k',
      },
      {
        id: 2,
        name: 'Bún bò tái',
        price: '30k',
        image: 'https://nethue.com.vn/uploaded/tin-tuc-biquyet-1.jpg',
      },
      {
        id: 3,
        name: 'Bún bò sườn',
        price: '40k',
        image: 'https://nethue.com.vn/uploaded/tin-tuc-biquyet-1.jpg',
      },
      {
        id: 4,
        name: 'Bún bò giò',
        price: '50k',
        image:
          'https://www.cooking-therapy.com/wp-content/uploads/2023/10/Bun-Bo-Hue-Recipe-13.jpg',
      },
    ],
  },
];
