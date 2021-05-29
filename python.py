products = {'apple': 800, 'banana': 600, 'milk': 700, 'orange': 120}

def round_price(price):
    rounded_price = round(price * 1.15)
    if rounded_price % 10 > 5:
        new_price = (rounded_price - (rounded_price % 10) + 10)
    elif rounded_price % 10 > 2.5:
        new_price = (rounded_price - (rounded_price % 10) + 5)
    else:
        new_price = (rounded_price - (rounded_price % 10))

    return new_price

def sell_price(products):
    sell_products = {}
    for name, price in products.items():
        sell_products[name] = round_price(price)

    return sell_products


print(sell_price(products))