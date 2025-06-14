#include <cs50.h>
#include <stdio.h>

int calculate_checksum(long raw);
void validate_card(long raw, string card_type, bool valid);
int digit_counter(long raw);
string card_detector(long raw);
bool is_valid_card(int checkinput, int digits);

int main(void)
{
    long numbers = get_long("Numbers: ");
    int checksum = calculate_checksum(numbers);
    int digits = digit_counter(numbers);
    bool validate = is_valid_card(checksum, digits);
    string card_type = card_detector(numbers);
    validate_card(numbers, card_type, validate);
}

int calculate_checksum(long raw)
{
    int position = 0;
    int sum = 0;

    while (raw > 0)
    {
        int digit = raw % 10;

        if (position % 2 == 1)
        {
            int product = digit * 2;

            if (product >= 10)
            {
                int detached = (product / 10) + (product % 10);
                sum += detached;
            }
            else
            {
                sum += product;
            }
        }
        else
        {
            sum += digit;
        }
        position++;
        raw /= 10;
    }
    return sum;
}

int digit_counter(long raw)
{
    int counter = 0;
    long num = raw;

    while (num > 0)
    {
        num /= 10;
        counter++;
    }
    return counter;
}

string card_detector(long raw)
{
    long num = raw;

    while (num >= 100)
    {
        num /= 10;
    }

    bool is_amex = num == 37;
    bool is_diners = num == 30;
    bool is_discover = num == 60;
    bool is_JCB = num == 35;
    bool is_mastercard = num == 22 || num == 55 || num == 51 || num == 52;
    bool is_visa = num == 41 || num == 40 || num == 42 || num == 49;

    if (is_amex)
    {
        return "AMEX";
    }
    else if (is_diners)
    {
        return "DINERS";
    }
    else if (is_discover)
    {
        return "DISCOVER";
    }
    else if (is_JCB)
    {
        return "JCB";
    }
    else if (is_mastercard)
    {
        return "MASTERCARD";
    }
    else if (is_visa)
    {
        return "VISA";
    }
    else
    {
        return "INVALID";
    }
}

bool is_valid_card(int checkinput, int digits)
{
    if (checkinput % 10 == 0 && digits > 10)
    {
        return true;
    }
    else
    {
        return false;
    }
}

void validate_card(long raw, string card_type, bool valid)
{
    long num = raw;

    while (num >= 100)
    {
        num /= 10;
    }

    if (valid)
    {
        printf("%s\n", card_type);
    }
    else
    {
        printf("INVALID\n");
    }
}
