import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderSummary = ({ totalCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total Item Dipesan: {totalCount}</Text>
      
      {/* Tampilkan label promo jika totalCount >= 5 */}
      {totalCount >= 5 && (
        <View style={styles.promoBadge}>
          <Text style={styles.promoText}>
            🎉 Selamat! Anda Mendapatkan Diskon 10%
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8EA',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FFE0B2',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A3728',
  },
  promoBadge: {
    marginTop: 8,
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A5D6A7',
  },
  promoText: {
    color: '#2E7D32',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default OrderSummary;