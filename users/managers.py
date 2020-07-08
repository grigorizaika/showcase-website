from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.core.exceptions import ObjectDoesNotExist


class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def _create_base_user(self, email, name, surname, password=None):
        # try without this
        if not email:
            raise ValueError('An email address is required')
        
        user = self.model(email=self.normalize_email(email),
                          name=name)
        user.set_password(password)
        user.save()

        return user

    def create_user(self, email, name, surname, password=None):
        user = self._create_base_user(email, name, surname, password)

        return user

    def create_superuser(self, email, name, surname, password=None):
        user = self._create_base_user(email, name, surname, password)
        user.is_staff = True
        user.is_superuser = True
        user.save()

        return user