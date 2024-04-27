import csv
import json
import subprocess

def read_csv_to_json(file_path):
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            yield row

def main():
    csv_file_path = 'mock_medics.csv'
    api_url = 'localhost:3000/api/medics'

    for data in read_csv_to_json(csv_file_path):
        json_data = json.dumps(data)
        curl_command = f'curl --location \'{api_url}\' --header \'Content-Type: application/json\' --data-raw \'{json_data}\''

        process = subprocess.Popen(curl_command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = process.communicate()

        status_code = process.returncode

        crmuf = data.get('crmuf')

        if status_code == 0:
            print(f"Sucesso - crmuf: {crmuf}")
        else:
            print(f"Erro - crmuf: {crmuf}")

if __name__ == "__main__":
    main()