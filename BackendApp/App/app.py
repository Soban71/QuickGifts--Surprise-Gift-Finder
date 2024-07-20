from flask import Flask, request, jsonify
import pandas as pd
import random
from categories import categories

app = Flask(__name__)

# Expanded categories and their associated items
def main():
    # Example of using the categories dictionary
    for category, items in categories.items():
        print(f"Category: {category}")
        for item in items:
            print(f" - {item['name']} (Price: ${item['price']}, Tags: {item['tags']})")

# Endpoints
@app.route('/recommend', methods=['POST'])
def recommend():
    interests = request.json.get('interests', [])

    if not interests:
        return jsonify({'error': 'No interests provided'}), 400

    # Filter gifts based on interests
    filtered_gifts = []
    for category, items in categories.items():
        for item in items:
            item_tags = item['tags'].split(',')
            if any(tag in interests for tag in item_tags):
                filtered_gifts.append(item)

    # Shuffle the filtered gifts list
    random.shuffle(filtered_gifts)

    # Select up to 3 random gifts from the filtered list
    selected_gifts = filtered_gifts[:5]

    return jsonify({'gifts': selected_gifts})

if __name__ == '__main__':
          app.run(host='0.0.0.0', port=8081, debug=True)

