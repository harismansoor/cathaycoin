from flask import Flask, render_template, session, redirect, url_for, request, flash
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  # Replace with a strong secret key in production

# Sample flight data
flights_data = [
    {
        'flight_number': 'CA101',
        'departure': 'New York (JFK)',
        'arrival': 'Hong Kong (HKG)',
        'departure_time': '08:00 AM',
        'arrival_time': '08:00 PM',
        'price': 800  # in CTC
    },
    {
        'flight_number': 'CA202',
        'departure': 'London (LHR)',
        'arrival': 'Hong Kong (HKG)',
        'departure_time': '10:00 AM',
        'arrival_time': '10:00 PM',
        'price': 750  # in CTC
    },
    {
        'flight_number': 'CA303',
        'departure': 'Sydney (SYD)',
        'arrival': 'Hong Kong (HKG)',
        'departure_time': '07:00 AM',
        'arrival_time': '03:00 PM',
        'price': 650  # in CTC
    }
]

# Sample hotel data
hotels_data = [
    {
        'name': 'Grand Hong Kong Hotel',
        'location': 'Central District',
        'price_per_night': 200,  # in CTC
        'available_rooms': 'Available'
    },
    {
        'name': 'Harbour View Inn',
        'location': 'Tsim Sha Tsui',
        'price_per_night': 150,  # in CTC
        'available_rooms': 'Limited'
    },
    {
        'name': 'Victoria Peak Suites',
        'location': 'Wan Chai',
        'price_per_night': 250,  # in CTC
        'available_rooms': 'Sold Out'
    }
]

# Hard-coded historical records
historical_flights = [
    {
        'flight_number': 'CA001',
        'departure': 'Los Angeles (LAX)',
        'arrival': 'Hong Kong (HKG)',
        'departure_time': '09:00 AM',
        'arrival_time': '09:00 PM',
        'price': 700,
        'status': 'Used'
    }
]

historical_hotels = [
    {
        'name': 'Ocean View Resort',
        'location': 'Repulse Bay',
        'price_per_night': 180,
        'status': 'Used'
    }
]

@app.route('/')
def index():
    # Initialize wallet balance if not set
    if 'wallet_balance' not in session:
        session['wallet_balance'] = 1500  # Initial balance: 1500 CTC
    return render_template('index.html', wallet_balance=session.get('wallet_balance', 1500))

@app.route('/ticket')
def ticket():
    return render_template('ticket.html', flights=flights_data, wallet_balance=session.get('wallet_balance', 1500))

@app.route('/hotel')
def hotel():
    return render_template('hotel.html', hotels=hotels_data, wallet_balance=session.get('wallet_balance', 1500))

@app.route('/records')
def records():
    # Display current bookings and historical records
    booked_flights = session.get('booked_flights', [])
    booked_hotels = session.get('booked_hotels', [])
    return render_template('records.html',
                           booked_flights=booked_flights,
                           booked_hotels=booked_hotels,
                           historical_flights=historical_flights,
                           historical_hotels=historical_hotels,
                           wallet_balance=session.get('wallet_balance', 1500))

@app.route('/charge', methods=['GET', 'POST'])
def charge():
    if request.method == 'POST':
        saving_file = os.path.join(app.root_path, 'saving.txt')
        if os.path.exists(saving_file):
            with open(saving_file, 'r') as file:
                lines = file.readlines()
                if len(lines) >= 2 and lines[0].strip().lower() == 'success':
                    try:
                        amount = int(lines[1].strip())
                        session['wallet_balance'] += amount
                        flash(f"Charge successful! Added {amount} CTC to your wallet.", 'success')
                    except ValueError:
                        flash("Invalid amount in saving.txt.", 'error')
                else:
                    flash("Charge failed. Please try again.", 'error')
        else:
            flash("saving.txt file not found.", 'error')
        return redirect(url_for('charge'))
    return render_template('charge.html')

@app.route('/book_flight', methods=['POST'])
def book_flight():
    flight_number = request.form.get('flight_number')
    # Find the flight
    flight = next((f for f in flights_data if f['flight_number'] == flight_number), None)
    if not flight:
        flash('Flight not found.', 'error')
        return redirect(url_for('ticket'))
    
    price = flight['price']
    wallet = session.get('wallet_balance', 1500)
    
    if wallet < price:
        flash('Insufficient funds to book this flight.', 'error')
        return redirect(url_for('ticket'))
    
    # Deduct the price
    session['wallet_balance'] = wallet - price
    # Add to booked flights
    booked_flight = {
        'flight_number': flight['flight_number'],
        'departure': flight['departure'],
        'arrival': flight['arrival'],
        'departure_time': flight['departure_time'],
        'arrival_time': flight['arrival_time'],
        'price': flight['price']
    }
    booked_flights = session.get('booked_flights', [])
    booked_flights.append(booked_flight)
    session['booked_flights'] = booked_flights
    flash(f"Successfully booked flight {flight_number} for CTC {price}.", 'success')
    return redirect(url_for('ticket'))

@app.route('/book_hotel', methods=['POST'])
def book_hotel_action():
    hotel_name = request.form.get('hotel_name')
    # Find the hotel
    hotel = next((h for h in hotels_data if h['name'] == hotel_name), None)
    if not hotel:
        flash('Hotel not found.', 'error')
        return redirect(url_for('hotel'))
    
    price = hotel['price_per_night']
    wallet = session.get('wallet_balance', 1500)
    
    if wallet < price:
        flash('Insufficient funds to book this hotel.', 'error')
        return redirect(url_for('hotel'))
    
    # Deduct the price
    session['wallet_balance'] = wallet - price
    # Add to booked hotels
    booked_hotel = {
        'name': hotel['name'],
        'location': hotel['location'],
        'price_per_night': hotel['price_per_night']
    }
    booked_hotels = session.get('booked_hotels', [])
    booked_hotels.append(booked_hotel)
    session['booked_hotels'] = booked_hotels
    flash(f"Successfully reserved hotel {hotel_name} for CTC {price} per night.", 'success')
    return redirect(url_for('hotel'))

@app.route('/clear_records', methods=['POST'])
def clear_records():
    # Clear current bookings
    session.pop('booked_flights', None)
    session.pop('booked_hotels', None)
    flash("Current bookings have been cleared.", 'success')
    return redirect(url_for('records'))

if __name__ == '__main__':
    app.run(debug=True)