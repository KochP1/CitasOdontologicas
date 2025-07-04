# Generated by Django 5.2.1 on 2025-06-03 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0003_alter_doctor_usuario'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='doctor',
            name='usuario',
        ),
        migrations.AddField(
            model_name='doctor',
            name='apellido',
            field=models.CharField(max_length=25, null=True),
        ),
        migrations.AddField(
            model_name='doctor',
            name='nombre',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='doctor',
            name='segundo_apellido',
            field=models.CharField(max_length=25, null=True),
        ),
        migrations.AddField(
            model_name='doctor',
            name='segundo_nombre',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='telefono',
            field=models.IntegerField(max_length=15),
        ),
    ]
