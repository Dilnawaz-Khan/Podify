import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {PodcastItem} from '../../types';
import {COLORS, Fonts} from '../../constants';

interface DataHorizontalListProps {
  headerTitle: string;
  data: PodcastItem[];
}

const DataHorizontalList = ({headerTitle, data}: DataHorizontalListProps) => {
  return (
    <View style={{width: '100%', gap: 20, paddingHorizontal: 20}}>
      <View>
        <Text
          style={{fontSize: 18, color: COLORS.White, fontFamily: Fonts.Bold}}>
          {headerTitle}
        </Text>
      </View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{width: 140, paddingHorizontal: 5, gap: 10}}>
            <Image
              source={item.poster}
              style={{width: '100%', height: 150, resizeMode: 'stretch'}}
            />
            <Text
              style={{
                fontSize: 16,
                color: COLORS.White,
                fontFamily: Fonts.Regular,
              }}>
              {item.name}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
      />
    </View>
  );
};

export {DataHorizontalList};

const styles = StyleSheet.create({});
