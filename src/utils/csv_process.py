import csv
import re

# ISP prefixes with '234' country code
mtnPrefixes = ['234803', '234806', '234813', '234816', '234703', '234706', '234903', '234906']
gloPrefixes = ['234805', '234807', '234811', '234815', '234905']
airtelPrefixes = ['234802', '234808', '234812', '234701', '234902', '234907']
mobile9Prefixes = ['234809', '234817', '234818', '234909']

# Function to detect ISP based on phone number prefix
def detect_isp(phone_number):    
    # Check prefixes of varying lengths (4 or 5 digits)
    prefix = phone_number[:6]
    if prefix in mtnPrefixes:
        return 'MTN'
    elif prefix in gloPrefixes:
        return 'Glo'
    elif prefix in airtelPrefixes:
        return 'Airtel'
    elif prefix in mobile9Prefixes:
        return '9mobile'
    else:
        return 'Unknown'

# Function to create separate CSV files for each ISP
def create_isp_csvs(input_csv):
    # Dictionary to hold numbers for each ISP
    isp_data = {'MTN': [], 'Glo': [], 'Airtel': [], '9mobile': [], 'Unknown': []}
    
    # Read input CSV
    with open(input_csv, 'r') as file:
        reader = csv.reader(file)
        for row in reader:
            phone_number = row[0].strip()  # Get phone number and remove extra spaces
            isp = detect_isp(phone_number)  # Detect ISP
            isp_data[isp].append(phone_number)  # Add to the corresponding ISP list
    
    # Create separate CSVs for each ISP
    for isp, numbers in isp_data.items():
        if numbers:  # Only create CSV if there are numbers for that ISP
            output_csv = f'{isp}_numbers.csv'
            with open(output_csv, 'w', newline='') as out_file:
                writer = csv.writer(out_file)
                for number in numbers:
                    writer.writerow([number])
            print(f'Created {output_csv} with {len(numbers)} numbers.')

# Path to the input CSV file containing the phone numbers
input_csv_file = r'C:\Users\USER\Desktop\DD\ajos\src\utils\converted_numbers.csv'

# Call the function to process the CSV and create ISP-based CSVs
create_isp_csvs(input_csv_file)
