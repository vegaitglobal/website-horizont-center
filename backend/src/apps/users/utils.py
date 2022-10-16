from django.core import signing
from apps.users.models import User, CaregiverProfile, BeneficiaryProfile
from apps.users.serializers import BeneficiaryProfileSerializer, CaregiverProfileSerializer
from caregivers.utils import SendVerificationTokenEmailNotification


def send_verification_email(user: User) -> None:
    url_hash = generate_url_hash_from_email(user.email)
    send_verification_token_email_notification = SendVerificationTokenEmailNotification(url_hash, user.email)
    send_verification_token_email_notification.start()


def create_caregiver_user(serializer: CaregiverProfileSerializer) -> User:
    user_kwargs = serializer.validated_data.pop('user')
    user = User.objects.create_user(**user_kwargs)
    CaregiverProfile.objects.create(user=user, **serializer.validated_data)

    return user


def create_beneficiary_user(serializer: BeneficiaryProfileSerializer) -> User:
    user_kwargs = serializer.validated_data.pop('user')
    user = User.objects.create_user(**user_kwargs)
    BeneficiaryProfile.objects.create(user=user, **serializer.validated_data)

    return user


def generate_url_hash_from_email(email) -> str:
    return signing.dumps({
        'email': email
    })


def get_email_from_hash(url_hash: str) -> str:
    decoded_key = signing.loads(url_hash)
    return decoded_key.get('email')